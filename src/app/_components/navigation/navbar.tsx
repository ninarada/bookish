"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
    pages: Record<string, `/${string}`>;
}

const tabsBaseClass = "whitespace-nowrap text-base p-3 hover:bg-pink-200";
const tabsActiveClass = "bg-pink-800 text-gray-200 pointer-events-none";

export default function NavBar ({pages}: NavbarProps) {
    const pathName = usePathname();

    return (
        <>
        <nav className="bg-white flex justify-between items-center py-1.5 sticky top-0 z-5 px-1.5 mb-2">
            <ul className="flex">
                {Object.entries(pages).map(([name, path])=> (
                    <li key={name}>
                        <Link href={path} className="text-pink-800 font-medium hover:text-pink-500">
                            <span className={`${tabsBaseClass} ${path ===pathName ? tabsActiveClass : ''}`}>
                                {name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        </>
    );
}