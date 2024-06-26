"use client"

import styles from "./search.module.css";
import Image from "next/image";
import React, { SetStateAction, useState } from "react";
import { useRouter } from 'next/navigation';

const SearchBar: React.FC<{ }> = ({  }) => {
    const [searchInput, setSearchInput] = useState('');
    const router = useRouter();

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearchInput(event.target.value);
    }

    const handleSearch = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        router.push(`/search?search=${encodeURIComponent(searchInput)}`);
    };

    return (
        <>
        <form className={styles.search} onSubmit={handleSearch}>
            <input type="text" placeholder='Search by Title / Author / ISBN' className={styles.input} name="search" value={searchInput} onChange={handleChange} />
            <button type='submit' className={styles.searchIcon}>
                <Image src="/search.svg" alt="" width={30} height={30} className={styles.searchSVG}/>
            </button>
        </form>
        
       </> 
    );
}

export default SearchBar;
