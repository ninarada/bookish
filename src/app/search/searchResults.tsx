"use client"
import { useSearchParams } from 'next/navigation';
import SearchResultsA from "../_components/search_bar/searchResultsA";

export default function searchResults (){
    const searchParams = useSearchParams();         //search=aa
    const searchValue = searchParams.get('search') ?? ''; //aa

    return(
        <>
        <SearchResultsA searchInput={searchValue}/>
        </>
    )
}