import type { SacramentMeeting } from '@/lib/types';
import MeetingCard from '@/components/MeetingCard';

export default async function Meetings() {
    const response = await fetch('http://localhost:3000/api/meetings');
    if (!response.ok) {
        throw new Error('Failed to fetch meetings');
    }

    const meetings: SacramentMeeting[] = await response.json();
    const sortedMeetings = [...meetings].sort((a, b) => b.date.localeCompare(a.date));

    return (
        <main>
            <div className="text-center p-2 mb-4">
                <h1 className="text-4xl m-2 font-bold">Meetings</h1>
                <p className="text-lg m-2">Here you can find and view all sacrament meetings from newest to oldest.</p>
            </div>

            <section className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
                {sortedMeetings.map((meeting) => (
                    <MeetingCard
                        key={meeting.id}
                        meeting={meeting}
                    />
                ))}
            </section>
        </main>
    );
}