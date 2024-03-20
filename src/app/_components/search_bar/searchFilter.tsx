"use client"

import { useState } from "react";
import styles from "./search.module.css"

export default function SearchFilter () {
    const [filterTab, setFilterTab] = useState("Books");

    return (
        <div className={styles.filters}>
            <div onClick={()=> setFilterTab("Books")}  className={`${styles.filterTab} ${filterTab === 'Books' ? styles.filterTabActive : ''}`}>
                Books
            </div>
            <div onClick={()=> setFilterTab("Authors")} className={`${styles.filterTab} ${filterTab === 'Authors' ? styles.filterTabActive : ''}`}>
                Authors
            </div>
        </div>
    )
}