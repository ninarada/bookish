import { TypeBook } from "@/app/types/TypeBook";

const baseUrl = 'https://openlibrary.org/works/OL66554W.json';

export default async function getWork(OLID: string) {

    const response = await fetch(`https://openlibrary.org/works/${OLID}.json`);
    const data = await response.json();

    const fetchedWorks: TypeBook = {
        description: data.description,
        title: data.title,
        authors: data.authors,
    };

    //console.log(fetchedWorks);
    
    return fetchedWorks;
}