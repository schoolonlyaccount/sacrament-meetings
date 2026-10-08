'use client';

import { State, updateMeeting } from "@/lib/actions";
import { useActionState } from "react";
import { SacramentMeeting } from "@/lib/types";

const initialState: State = {
    message: '',
    errors: {}
}

type Props = {
    id: number;
    meetingData: SacramentMeeting;
}

export default function EditForm({ id, meetingData }: Props) {
    const [state, formAction, isPending] = useActionState(updateMeeting.bind(null, id), initialState);

    const inputStyle = `bg-[var(--quinary-color)] p-2 rounded-[4px] cursor-pointer`;

    return (
        <div>
            <form action={formAction} className="flex flex-col gap-4 bg-[var(--quaternary-color)] rounded-[4px] p-4 mb-8 w-[96%] mx-auto">
                {state.message && (
                    <p aria-live="polite" className="text-red-600">
                        {state.message}
                    </p>
                )}

                <label htmlFor="date" className="text-2xl font-bold">Date</label>
                <input id="date" type="date" name="date" required aria-describedby="date-error" className={inputStyle} defaultValue={meetingData.date} />
                <div id="date-error" aria-live="polite">
                    {state.errors?.date?.map((error, index) => (
                        <p key={`${error}-${index}`} className="text-red-600">{error}</p>
                    ))}
                </div>

                <label htmlFor="meetingType" className="text-2xl font-bold">Meeting Type</label>
                <select id="meetingType" name="meetingType" required aria-describedby="meetingType-error" className={inputStyle} defaultValue={meetingData.meetingType}>
                    <option value="testimony">Testimony</option>
                    <option value="regular">Regular</option>
                    <option value="stake">Stake</option>
                    <option value="general">General</option>
                </select>
                <div id="meetingType-error" aria-live="polite">
                    {state.errors?.meetingType?.map((error, index) => (
                        <p key={`${error}-${index}`} className="text-red-600">{error}</p>
                    ))}
                </div>

                <label htmlFor="presiding" className="text-2xl font-bold">Presiding</label>
                <input id="presiding" type="text" name="presiding" required aria-describedby="presiding-error" className={inputStyle} defaultValue={meetingData.presiding} />
                <div id="presiding-error" aria-live="polite">
                    {state.errors?.presiding?.map((error, index) => (
                        <p key={`${error}-${index}`} className="text-red-600">{error}</p>
                    ))}
                </div>

                <label htmlFor="conducting" className="text-2xl font-bold">Conducting</label>
                <input id="conducting" type="text" name="conducting" required aria-describedby="conducting-error" className={inputStyle} defaultValue={meetingData.conducting} />
                <div id="conducting-error" aria-live="polite">
                    {state.errors?.conducting?.map((error, index) => (
                        <p key={`${error}-${index}`} className="text-red-600">{error}</p>
                    ))}
                </div>

                <label htmlFor="announcements" className="text-2xl font-bold">
                    Announcements (comma-separated)
                </label>
                <input id="announcements" type="text" name="announcements" aria-describedby="announcements-error" className={inputStyle} defaultValue={meetingData.announcements?.join(', ') ?? ''} />
                <div id="announcements-error" aria-live="polite">
                    {state.errors?.announcements?.map((error, index) => (
                        <p key={`${error}-${index}`} className="text-red-600">{error}</p>
                    ))}
                </div>

                <label htmlFor="openingHymn" className="text-2xl font-bold">
                    Opening Hymn (number, title)
                </label>
                <input id="openingHymn" type="text" name="openingHymn" required aria-describedby="openingHymn-error" className={inputStyle} defaultValue={`${meetingData.openingHymn.number}, ${meetingData.openingHymn.title}`} />
                <div id="openingHymn-error" aria-live="polite">
                    {state.errors?.openingHymn?.map((error, index) => (
                        <p key={`${error}-${index}`} className="text-red-600">{error}</p>
                    ))}
                </div>

                <label htmlFor="openingPrayer" className="text-2xl font-bold">Opening Prayer</label>
                <input id="openingPrayer" type="text" name="openingPrayer" required aria-describedby="openingPrayer-error" className={inputStyle} defaultValue={meetingData.openingPrayer} />
                <div id="openingPrayer-error" aria-live="polite">
                    {state.errors?.openingPrayer?.map((error, index) => (
                        <p key={`${error}-${index}`} className="text-red-600">{error}</p>
                    ))}
                </div>

                <label htmlFor="wardBusiness" className="text-2xl font-bold">
                    Ward Business (comma-separated)
                </label>
                <input id="wardBusiness" type="text" name="wardBusiness" aria-describedby="wardBusiness-error" className={inputStyle} defaultValue={meetingData.wardBusiness?.map((item: { description: string }) => item.description).join(', ') ?? ''} />
                <div id="wardBusiness-error" aria-live="polite">
                    {state.errors?.wardBusiness?.map((error, index) => (
                        <p key={`${error}-${index}`} className="text-red-600">{error}</p>
                    ))}
                </div>

                <label htmlFor="stakeBusiness" className="text-2xl font-bold">Stake Business</label>
                <select id="stakeBusiness" name="stakeBusiness" required aria-describedby="stakeBusiness-error" className={inputStyle} defaultValue={String(meetingData.stakeBusiness)}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <div id="stakeBusiness-error" aria-live="polite">
                    {state.errors?.stakeBusiness?.map((error, index) => (
                        <p key={`${error}-${index}`} className="text-red-600">{error}</p>
                    ))}
                </div>

                <label htmlFor="sacramentHymn" className="text-2xl font-bold">
                    Sacrament Hymn (number, title)
                </label>
                <input id="sacramentHymn" type="text" name="sacramentHymn" required aria-describedby="sacramentHymn-error" className={inputStyle} defaultValue={`${meetingData.sacramentHymn.number}, ${meetingData.sacramentHymn.title}`} />
                <div id="sacramentHymn-error" aria-live="polite">
                    {state.errors?.sacramentHymn?.map((error, index) => (
                        <p key={`${error}-${index}`} className="text-red-600">{error}</p>
                    ))}
                </div>

                <label htmlFor="speakers" className="text-2xl font-bold">
                    Speakers (name, topic/performed by, speaker/musical-number; Use semicolons to separate multiple speakers)
                </label>
                <input id="speakers" type="text" name="speakers" aria-describedby="speakers-error" className={inputStyle} defaultValue={meetingData.speakers?.map((speaker: { name: string; topic: string; type: string; }) => `${speaker.name}, ${speaker.topic}, ${speaker.type}`).join('; ') ?? ''} />
                <div id="speakers-error" aria-live="polite">
                    {state.errors?.speakers?.map((error, index) => (
                        <p key={`${error}-${index}`} className="text-red-600">{error}</p>
                    ))}
                </div>

                <label htmlFor="closingHymn" className="text-2xl font-bold">
                    Closing Hymn (number, title)
                </label>
                <input id="closingHymn" type="text" name="closingHymn" required aria-describedby="closingHymn-error" className={inputStyle} defaultValue={`${meetingData.closingHymn.number}, ${meetingData.closingHymn.title}`} />
                <div id="closingHymn-error" aria-live="polite">
                    {state.errors?.closingHymn?.map((error, index) => (
                        <p key={`${error}-${index}`} className="text-red-600">{error}</p>
                    ))}
                </div>

                <label htmlFor="closingPrayer" className="text-2xl font-bold">Closing Prayer</label>
                <input id="closingPrayer" type="text" name="closingPrayer" required aria-describedby="closingPrayer-error" className={inputStyle} defaultValue={meetingData.closingPrayer} />
                <div id="closingPrayer-error" aria-live="polite">
                    {state.errors?.closingPrayer?.map((error, index) => (
                        <p key={`${error}-${index}`} className="text-red-600">{error}</p>
                    ))}
                </div>

                <button type="submit" disabled={isPending}
                    className="cursor-pointer rounded-[4px] bg-[#03703d] p-2 text-white text-2xl w-[50%] mx-auto border border-[var(--quinary-color)] transition-colors duration 250 ease-in-out hover:border-white"
                > {isPending ? 'Updating Meeting...' : 'Update Meeting'} </button>
            </form>
        </div>
    );
}