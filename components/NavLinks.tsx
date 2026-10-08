'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
    const pathname = usePathname();
    const isMeetings = pathname === '/meetings' || pathname.startsWith('/meetings/');

    return (
        <nav aria-label="Primary" className="bg-[var(--tertiary-color)]">
            <ul className="flex flex-row gap-x-2 p-2">
                <li>
                    <Link
                        href="/"
                        className={`nav-link-box ${pathname === '/' ? 'active' : 'inactive'}`}
                        aria-current={pathname === '/' ? 'page' : undefined}
                    >Home</Link>
                </li>
                <li>
                    <Link
                        href="/meetings"
                        className={`nav-link-box ${isMeetings ? 'active' : 'inactive'}`}
                        aria-current={isMeetings ? 'page' : undefined}
                    >Meetings</Link>
                </li>
            </ul>
        </nav>
    );
}