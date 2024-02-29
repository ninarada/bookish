"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import Image from "next/image";
import { Playfair_Display } from 'next/font/google'
import { useEffect, useState } from "react";

const playfair = Playfair_Display({ 
    weight: [ '800'],
    style: ['italic'],
    subsets: ['latin'],
});

interface NavbarProps {
    pages: Record<string, `/${string}`>;
}

export default function NavBar ({pages}: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <nav className={`${styles.container} ${(pathName==="/" && scrolled) || (pathName!=="/")  ? styles.scrolled : ''}`}>
            <div className={styles.leftTabs}>
                {Object.entries(pages).map(([name, path])=> (
                    <Link href={path} key={name} className={`${styles.tabBaseClass} ${path ===pathName ? styles.tabActiveClass : ''}`}>
                        {name}
                    </Link>
                ))}
            </div>
            <div className={styles.logo}>
                    <span className={playfair.className}>bookish</span>
            </div>
            <div className={styles.rightTabs}>
                <span className={styles.icon}>
                    <Image src="/search.svg" alt="searchIcon" width={50} height={50} className={styles.iconSVG}/>
                </span>
                <span className={styles.icon}>
                    <Image src="/notification.svg" alt="notifIcon" width={50} height={50} className={styles.iconSVG}/>
                </span>
                <span className={styles.icon}>
                    <Image src="/messages.svg" alt="nmessageIcon" width={50} height={50} className={styles.iconSVG}/>
                </span>
                <span className={styles.icon}>
                    <Image src="/profile.svg" alt="nmessageIcon" width={50} height={50} className={styles.iconSVG}/>
                </span>
            </div>
        </nav>
        </>
    );
}