import type { SacramentMeeting } from "@/lib/types";
import { redirect } from "next/navigation";

export default async function MeetingCurrent() {
    const today = new Date();
    const dayOfWeek = today.getDay();

    const sunday = new Date(today);
    sunday.setDate(today.getDate() - dayOfWeek);

    const sundayString = sunday.toISOString().split("T")[0];

    const response = await fetch(
        `http://localhost:3000/api/meetings?date=${sundayString}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch current meeting");
    }

    const meetings: SacramentMeeting[] = await response.json();

    if (meetings.length === 0) {
        redirect("/meetings");
    }

    redirect(`/meetings/${meetings[0].id}`);
}