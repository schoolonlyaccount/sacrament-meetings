'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from 'zod';
import {
    createMeeting as dbCreateMeeting,
    updateMeeting as dbUpdateMeeting,
    deleteMeeting as dbDeleteMeeting
} from "./meetings-db";

const HymnSchema = z.object({
    number: z.number().int().positive(),
    title: z.string().min(1)
});

const SpeakerSchema = z.object({
    name: z.string().min(1),
    topic: z.string().min(1),
    type: z.enum(['speaker', 'musical-number'])
});

const WardBusinessSchema = z.object({
    description: z.string().min(1)
});

const MeetingFormSchema = z.object({
    date: z.string().min(1),
    meetingType: z.enum(['testimony', 'regular', 'stake', 'general']),
    presiding: z.string().min(1),
    conducting: z.string().min(1),
    announcements: z.array(z.string()).optional(),
    openingHymn: HymnSchema,
    openingPrayer: z.string().min(1),
    wardBusiness: z.array(WardBusinessSchema),
    stakeBusiness: z.boolean(),
    sacramentHymn: HymnSchema,
    speakers: z.array(SpeakerSchema),
    closingHymn: HymnSchema,
    closingPrayer: z.string().min(1),
});

function getMeetingFormData(formData: FormData) {
    const getString = (formData: FormData, name: string): string => {
        return String(formData.get(name) ?? '').trim();
    };
    const parseAnnouncements = (formData: FormData): string[] => {
        return getString(formData, 'announcements').split(',').map(item => item.trim()).filter(Boolean);
    };
    const parseHymn = (formData: FormData, name: string) => {
        const value = getString(formData, name);
        const [number, ...titleParts] = value.split(',');

        return {
            number: Number(number.trim()),
            title: titleParts.join(',').trim()
        };
    };
    const parseWardBusiness = (formData: FormData) => {
        return getString(formData, 'wardBusiness').split(',').map(description => description.trim()).filter(Boolean).map(description => ({ description }));
    };
    const parseStakeBusiness = (formData: FormData) => {
        return getString(formData, 'stakeBusiness') === 'true';
    };
    const parseSpeakers = (formData: FormData) => {
        return getString(formData, 'speakers').split(';').map(item => item.trim()).filter(Boolean).map(item => {
            const [name, topic, type] = item.split(',').map(value => value.trim());
            return { name, topic, type };
        });
    };

    return {
        date: getString(formData, 'date'),
        meetingType: getString(formData, 'meetingType'),
        presiding: getString(formData, 'presiding'),
        conducting: getString(formData, 'conducting'),
        announcements: parseAnnouncements(formData),
        openingHymn: parseHymn(formData, 'openingHymn'),
        openingPrayer: getString(formData, 'openingPrayer'),
        wardBusiness: parseWardBusiness(formData),
        stakeBusiness: parseStakeBusiness(formData),
        sacramentHymn: parseHymn(formData, 'sacramentHymn'),
        speakers: parseSpeakers(formData),
        closingHymn: parseHymn(formData, 'closingHymn'),
        closingPrayer: getString(formData, 'closingPrayer')
    };
}

export type State = {
    message?: string;
    errors?: {
        date?: string[];
        meetingType?: string[];
        presiding?: string[];
        conducting?: string[];
        announcements?: string[];
        openingHymn?: string[];
        openingPrayer?: string[];
        wardBusiness?: string[];
        stakeBusiness?: string[];
        sacramentHymn?: string[];
        speakers?: string[];
        closingHymn?: string[];
        closingPrayer?: string[];
    };
};

// Create, Update, and Delete
export async function createMeeting(prevState: State, formData: FormData): Promise<State> {
    const validatedFields = MeetingFormSchema.safeParse(getMeetingFormData(formData));

    if (!validatedFields.success) {
        return {
            message: 'Please correct the errors below.',
            errors: validatedFields.error.flatten().fieldErrors
        };
    }

    try {
        await dbCreateMeeting(validatedFields.data);
    } catch (error) {
        console.error('Error creating meeting: ', error);
        //throw new Error('Unable to create the meeting. Please try again later.');
        throw error;
    }

    revalidatePath('/meetings');
    redirect('/meetings');
}

export async function updateMeeting(id: number, prevState: State, formData: FormData): Promise<State> {
    const validatedFields = MeetingFormSchema.safeParse(getMeetingFormData(formData));

    if (!validatedFields.success) {
        return {
            message: 'Please correct the errors below.',
            errors: validatedFields.error.flatten().fieldErrors
        };
    }

    try {
        await dbUpdateMeeting(id, validatedFields.data);
    } catch (error) {
        console.error('Error updating meeting: ', error);
        throw new Error('Unable to update the meeting. Please try again later.');
    }

    revalidatePath('/meetings');
    redirect('/meetings');
}

export async function deleteMeeting(id: number) {
    try {
        await dbDeleteMeeting(id);
    } catch (error) {
        console.error('Error deleting meeting: ', error);
        throw new Error('Unable to delete this meeting. Please try again later.');
    }

    revalidatePath('/meetings');
    redirect('/meetings');
}