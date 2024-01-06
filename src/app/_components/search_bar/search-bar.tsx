import styles from "./search.module.css";
import Image from "next/image";
import Link from "next/link";

export default function SearchBar () {
    return (
        <>
        <div className={styles.search}>
            <input type="text" placeholder='Title / Author / ISBN' className={styles.input} />
            <button type='submit' className={styles.searchIcon}>
                <Image src="/search.svg" alt="" width={30} height={30} className={styles.searchSVG}/>
            </button>
        </div>
        </>
    );
}