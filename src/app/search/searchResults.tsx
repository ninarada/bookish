"use client"
import { useSearchParams } from 'next/navigation';
import SearchResultsB from '../_components/search_bar/searchResultB';

export default function searchResults (){
    const searchParams = useSearchParams();         //search=aa
    const searchValue = searchParams.get('search') ?? ''; //aa

    return(
        <>
        <SearchResultsB searchInput={searchValue}/>
        </>
    )
}