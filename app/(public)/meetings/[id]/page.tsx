import type { SacramentMeeting } from '@/lib/types';
import MeetingDetail from '@/components/MeetingDetail';
import { getMeetingById } from '@/lib/meetings-db';

type Props = {
    params: Promise<{ id: string }>;
};

export default async function Meeting({ params }: Props) {
    const { id } = await params;

    const meeting: SacramentMeeting | null = await getMeetingById(Number(id));
    if (!meeting) {
        throw new Error('Meeting not found');
    }

    return (
        <main>
            <MeetingDetail meeting={meeting} />
        </main>
    );
}