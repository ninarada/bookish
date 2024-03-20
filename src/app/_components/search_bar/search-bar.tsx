"use client"

import styles from "./search.module.css";
import Image from "next/image";
import React, { SetStateAction, useState } from "react";
import SearchResults from "./searchResultsA";
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from "next/navigation";

const SearchBar: React.FC<{ }> = ({  }) => {
    const [searchInput, setSearchInput] = useState('');
    let inn;
    const router = useRouter();
    const pathname = usePathname();                 ///blogs
    const searchParams = useSearchParams();         //search=aa

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        //inn = event.target.value;
        //console.log("inn="+inn);
        setSearchInput(event.target.value);
    }

    const handleSearch = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        router.push(`/blogs?search=${searchInput}`);
        setTimeout(() => {
            window.location.reload();
        }, 1000); // Adjust the delay as needed
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
