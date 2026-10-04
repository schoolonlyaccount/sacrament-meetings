//import type { SacramentMeeting } from '@/lib/types';
import { getMeetings, getMeetingsTotalPages } from '@/lib/meetings-db';
import MeetingSearch from '@/components/MeetingSearch';
import MeetingCard from '@/components/MeetingCard';
import { Pagination } from '@/components/Pagination';

export default async function Meetings(props: { searchParams?: Promise<{ query?: string; page?: string }> }) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query ?? '';
    const currentPage = Number(searchParams?.page) || 1;

    const [sortedMeetings, totalPages] = await Promise.all([
        getMeetings(query, currentPage).then(meetings => [...meetings].sort((a, b) => b.date.localeCompare(a.date))),
        getMeetingsTotalPages(query),
    ]);

    return (
        <main>
            <div className="text-center p-2 mb-4">
                <h1 className="text-4xl m-2 font-bold">Meetings</h1>
                <p className="text-lg m-2">Here you can find and view all sacrament meetings from newest to oldest.</p>
            </div>

            <MeetingSearch />
            <section className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
                {sortedMeetings.map((m) => (
                    <MeetingCard key={m.id} meeting={m} />
                ))}
            </section>
            <Pagination totalPages={totalPages} />
        </main>
    );
}