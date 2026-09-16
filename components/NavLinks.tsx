'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
    const pathname = usePathname();
    const isMeetings = pathname === '/meetings' || pathname.startsWith('/meetings/');
    return (
        <nav aria-label="Primary">
            <ul className="flex flex-row gap-x-2 p-2">
                <li>
                    <Link
                        href="/"
                        className={`block w-32 rounded-lg border-4 border-[var(--secondary-color)] bg-[var(--secondary-color)] p-2 text-center transition-colors duration-250 ease hover:border-white ${pathname === '/' ? 'active' : 'inactive'
                            }`}
                        aria-current={pathname === '/' ? 'page' : undefined}
                    >Home</Link>
                </li>
                <li>
                    <Link
                        href="/meetings"
                        className={`block w-32 rounded-lg border-4 border-[var(--secondary-color)] bg-[var(--secondary-color)] p-2 text-center transition-colors duration-250 ease hover:border-white ${isMeetings ? 'active' : 'inactive'
                            }`}
                        aria-current={isMeetings ? 'page' : undefined}
                    >Meetings</Link>
                </li>
            </ul>
        </nav>
    );
}