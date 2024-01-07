import { TypeWork } from "@/app/types/TypeWork";

export default async function getWork(OLID: string) {

    const response = await fetch(`https://openlibrary.org/works/${OLID}.json`);
    const data = await response.json();

    const fetchedWorks: TypeWork = {
        key: data.key,
        title: data.title,
        authors: data.authors,
        covers: data.covers,
        description: data.description,
    };

    //console.log(fetchedWorks);
    
    return fetchedWorks;
}