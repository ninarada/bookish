"use client"

import { useSearchParams } from 'next/navigation';
import SearchResultsB from '../_components/search_bar/searchResultB';
import SearchFilter from '../_components/search_bar/searchFilter';
import styles from "./search.module.css";
import { useEffect, useState } from 'react';

export default function searchResults (){
    const searchParams = useSearchParams();         
    const searchValue = searchParams.get('search') ?? ''; 
    const [shouldShowFilter, setShouldShowFilter] = useState(false);

    useEffect(() => {
        setShouldShowFilter(searchValue !== '');
    }, [searchValue]);

    return(
        <>
        {shouldShowFilter && <SearchFilter />}
        <SearchResultsB searchInput={searchValue}/>
        {shouldShowFilter && (
            <div className={styles.paginationBox}>
                <div className={styles.pages}>previous</div>
                <div className={styles.pages}>next</div>
            </div>
        )}
        </>
    )
}