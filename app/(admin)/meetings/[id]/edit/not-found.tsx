import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="text-center p-8 text-white">
            <h1 className="text-3xl font-bold">
                Meeting Not Found
            </h1>

            <p className="mt-3">
                The meeting you are looking for does not exist.
            </p>

            <div className="mt-6">
                <Link
                    href="/meetings"
                    className="rounded-[4px] bg-[#03703d] p-2 text-white text-lg border border-[var(--quinary-color)] transition-colors duration 250 ease-in-out hover:border-white"
                >
                    Back to Meetings
                </Link>
            </div>
        </div>
    );
}