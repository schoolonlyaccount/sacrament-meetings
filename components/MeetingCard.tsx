import { SacramentMeeting } from "@/lib/types";
import Link from "next/link";

interface MeetingCardProps {
    meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
    return (
        <article className="rounded-lg border-4 border-[var(--secondary-color)] bg-[var(--secondary-color)] p-2 hover:cursor-pointer hover:border-[white] transition-colors duration-250 ease">
            <Link href={`/meetings/${meeting.id}`} className="block h-full">
                <h2 className="text-2xl font-bold text-center border-b mb-2">{meeting.date}</h2>
                <p className="capitalize text-center">{meeting.meetingType} Meeting</p>
                <p><strong>Presiding:</strong> {meeting.presiding}</p>
                <p><strong>Conducting:</strong> {meeting.conducting}</p>
                <p><strong>Program items:</strong> {meeting.speakers.length}</p>
            </Link>
        </article>
    );
}