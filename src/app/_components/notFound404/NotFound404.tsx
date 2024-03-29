import Link from "next/link";
import Image from 'next/image';
import styles from "./notFound404.module.css"

const NotFound404 = () => {
    return (
        <div className={styles.main}>
            <div className={styles.textContainer}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.header1}>Oops,</h1>
                    <h1 className={styles.header1}>You are lost!</h1>
                </div>
                <p className={styles.text}>We are very sorry for the inconvenience. It looks like you are trying to acces a page that either has been deleted or never existed.</p>
                <Link href="/" className={styles.btn}>Back to home</Link>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/4.svg" alt="404 Image" width={700} height={700}/>
            </div>
        </div>
    )
    
}

export default NotFound404;