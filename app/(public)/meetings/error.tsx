'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('An uncaught error occurred:', error);
    }, [error]);

    return (
        <div className="text-center p-8 text-white">
            <h1 className="text-3xl font-bold">
                Something went wrong!
            </h1>

            <p className="mt-3">
                An unexpected error occurred. Please try again later.
            </p>

            <div className="mt-6 flex justify-center gap-4">
                <button
                    onClick={reset}
                    className="rounded-[4px] bg-[#03703d] p-2 text-white text-lg border border-[var(--quinary-color)] transition-colors duration 250 ease-in-out hover:border-white"
                >
                    Try Again
                </button>

                <Link
                    href="/meetings"
                    className="rounded-[4px] bg-[#03703d] p-2 text-white text-lg border border-[var(--quinary-color)] transition-colors duration 250 ease-in-out hover:border-white"
                >
                    Go Back to Meetings
                </Link>
            </div>
        </div>
    );
}