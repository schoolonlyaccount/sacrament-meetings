'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function MeetingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    return (
        <section>
            <nav className="border-t-6 border-[var(--secondary-color)] bg-[var(--tertiary-color)]">
                <ul className="flex flex-row gap-x-2 p-2">
                    <li>
                        <Link href="/meetings"
                            className={`nav-link-box ${pathname === '/meetings' ? 'active' : 'inactive'
                                }`}
                            aria-current={pathname === '/' ? 'page' : undefined}>
                            All Meetings
                        </Link>
                    </li>

                    <li>
                        <Link href="/meetings/current"
                            className={`nav-link-box ${pathname === '/meetings/current' ? 'active' : 'inactive'
                                }`}
                            aria-current={pathname === '/meetings/current' ? 'page' : undefined}>
                            Current Meeting
                        </Link>
                    </li>
                </ul>
            </nav>

            {children}
        </section>
    );
}