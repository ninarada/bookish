import { TypeWork } from '@/app/types/TypeWork';
import styles from './work.module.css';
import Image from "next/image";

export default function BookTemplate (work: TypeWork) {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.title}>{work.title}</div>
            
        </div>
        </>
    )
}