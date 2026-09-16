import Image from 'next/image';
import NavLinks from './NavLinks';

export default function Header() {
    return (
        <header className="bg-[var(--primary-color)] p-1">
            <div className="flex flex-col items-start mb-2">
                <div className="flex flex-col items-center p-1">
                    <div className="w-full text-left">
                        <Image src="/ward_image.png" alt="Butterfly ward logo" width={50} height={47} className="inline-block h-auto w-20 sm:w-24 md:w-32 lg:w-40 [image-rendering:pixelated]" />
                        <span id="header-title" className="text-4xl ml-4 font-bold">
                            The Butterfly Ward
                        </span>
                    </div>
                    <p className="text-2xl mt-4">Current Date: {new Intl.DateTimeFormat('en-CA').format(new Date())}</p>
                </div>
            </div>

            <NavLinks />
        </header>
    );
}