import { getMeetings } from "@/lib/meetings-db";
import { redirect } from "next/navigation";

export default async function MeetingCurrent() {
    const today = new Date();
    const dayOfWeek = today.getDay();

    const sunday = new Date(today);
    sunday.setDate(today.getDate() - dayOfWeek);

    const sundayString = new Intl.DateTimeFormat("en-CA").format(sunday);

    const meetings = await getMeetings(sundayString);
    const meeting = meetings[0];

    if (!meeting) {
        redirect("/meetings");
    }

    redirect(`/meetings/${meeting.id}`);
}
