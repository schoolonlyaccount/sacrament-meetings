import { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
    meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
    return (
        <article className="p-4 mb-4">
            <div className="text-center mb-6">
                <h1 className="text-4xl m-2 font-bold">Meeting Details</h1>
                <p className="text-2xl">{meeting.date}</p>
                <p className="capitalize text-lg">{meeting.meetingType} Meeting</p>
            </div>

            <div className="bg-[var(--quaternary-color)] rounded-[4px] p-4 w-[98%] mx-auto">
                <section className="mb-6 text-white">
                    <p className="text-[1.5rem]"><strong>Presiding:</strong> {meeting.presiding}</p>
                    <p className="text-[1.5rem]"><strong>Conducting:</strong> {meeting.conducting}</p>
                </section>

                <div className="bg-[var(--quinary-color)] rounded-[4px] p-4">
                    <section className="mb-6">
                        <h2 className="mb-3 border-b text-2xl font-bold">
                            Announcements
                        </h2>

                        {meeting.announcements && meeting.announcements.length > 0 ? (
                            <ul className="list-disc space-y-2 pl-6">
                                {meeting.announcements.map((announcement, index) => (
                                    <li key={index}>
                                        {announcement}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No announcements.</p>
                        )}
                    </section>

                    <section className="mb-6">
                        <h2 className="mb-3 border-b text-2xl font-bold">
                            Opening
                        </h2>

                        <p>
                            <strong>Opening Hymn:</strong>{" "}
                            #{meeting.openingHymn.number} — {meeting.openingHymn.title}
                        </p>

                        <p>
                            <strong>Opening Prayer:</strong> {meeting.openingPrayer}
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="mb-3 border-b text-2xl font-bold">
                            Ward Business
                        </h2>

                        {meeting.wardBusiness.length > 0 ? (
                            <ul className="list-disc space-y-2 pl-6">
                                {meeting.wardBusiness.map((item, index) => (
                                    <li key={index}>
                                        {item.description}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No ward business.</p>
                        )}
                    </section>

                    <section className="mb-6">
                        <h2 className="mb-3 border-b text-2xl font-bold">
                            Stake Business
                        </h2>

                        <p>
                            {meeting.stakeBusiness
                                ? "There is stake business for this meeting."
                                : "There is no stake business for this meeting."}
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="mb-3 border-b text-2xl font-bold">
                            Sacrament
                        </h2>

                        <p>
                            <strong>Sacrament Hymn:</strong>{" "}
                            #{meeting.sacramentHymn.number} — {meeting.sacramentHymn.title}
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="mb-3 border-b text-2xl font-bold">
                            Speakers & Musical Numbers
                        </h2>

                        <div className="space-y-4">
                            {meeting.speakers.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg border p-4"
                                >
                                    {item.type === 'speaker' ? (
                                        <>
                                            <h3 className="text-xl font-bold">
                                                {item.name}
                                            </h3>
                                            <p>
                                                <strong>Topic:</strong> {item.topic}
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <h3 className="text-xl font-bold">
                                                Musical Number
                                            </h3>
                                            <p>
                                                <strong>Performed by:</strong> {item.name}
                                            </p>
                                            <p>
                                                <strong>Selection:</strong> {item.topic}
                                            </p>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-3 border-b text-2xl font-bold">
                            Closing
                        </h2>

                        <p>
                            <strong>Closing Hymn:</strong>{" "}
                            #{meeting.closingHymn.number} — {meeting.closingHymn.title}
                        </p>

                        <p>
                            <strong>Closing Prayer:</strong> {meeting.closingPrayer}
                        </p>
                    </section>
                </div>
            </div>
        </article>
    );
}