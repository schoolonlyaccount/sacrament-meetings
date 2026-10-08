import { deleteMeeting } from "@/lib/actions";
import { getMeetingById } from "@/lib/meetings-db";
import { notFound } from "next/navigation";
import EditForm from "./edit-form"

export default async function Edit(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = Number(params.id);

    const meetingData = await getMeetingById(id);

    if (!meetingData) {
        notFound();
    }

    return (
        <div>
            <div className="text-center p-4 mb-4">
                <h1 className="text-4xl m-2 font-bold text-white">Edit Meeting</h1>
                <p className="text-lg m-2 text-white">Here you can edit this sacrament meeting.</p>
            </div>

            <EditForm id={id} meetingData={meetingData} />

            <form action={deleteMeeting.bind(null, meetingData.id)} className="flex justify-end">
                <button type="submit" className='bg-red-800 border border-red-800 text-white p-2 m-4 w-[8rem] rounded-[4px] text-sm cursor-pointer transition-colors duration 250 ease-in-out hover:border-white'>
                    Delete Meeting
                </button>
            </form>
        </div>
    );
}