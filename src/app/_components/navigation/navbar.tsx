"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import Image from "next/image";

interface NavbarProps {
    pages: Record<string, `/${string}`>;
}


export default function NavBar ({pages}: NavbarProps) {
    const pathName = usePathname();

    return (
        <>
        <nav className={styles.container}>
            <div className={styles.leftTabs}>
                {Object.entries(pages).map(([name, path])=> (
                    <Link href={path} key={name}>
                        <span className={`${styles.tabBaseClass} ${path ===pathName ? styles.tabActiveClass : ''}`}>
                            {name}
                        </span>
                    </Link>
                ))}
            </div>
            <div className={styles.logo}>
                    <span>bookish</span>
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
            </div>
        </nav>
        </>
    );
}