import type { SacramentMeeting } from '@/lib/types';
import MeetingDetail from '@/components/MeetingDetail';

type Props = {
    params: Promise<{ id: string }>;
};

export default async function Meeting({ params }: Props) {
    const { id } = await params;

    const response = await fetch(
        `http://localhost:3000/api/meetings/${id}`
    );
    if (!response.ok) {
        throw new Error('Failed to fetch meeting');
    }

    const meeting: SacramentMeeting = await response.json();

    return <MeetingDetail meeting={meeting} />;
}