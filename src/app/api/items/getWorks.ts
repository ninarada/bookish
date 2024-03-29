import { TypeWork } from "@/app/types/TypeWork";

export default async function getWork(OLID: string){
    let response = null;

    if(OLID ===''){
        return null;
    }

    try {
        response = await fetch(`https://cors-anywhere.herokuapp.com/https://openlibrary.org/books/${OLID}.json`);
       
    } catch (error) {
        return null;
        //throw new Error(`Unable to fetch work with OLID: ${OLID}`);
    }

    if (!response.ok || response.status !== 200) {
            //throw new Error(`Failed to fetch work with OLID: ${OLID}. Status: ${response.status}`);
            return null;
    }
    const data = await response.json();


    const fetchedWork: TypeWork = {
        key: data.key,
        title: data.title,
        authors: data.authors,
        covers: data.covers,
        description: data.description?.value || data?.description,
        pagination: data?.pagination,
        publish_date: data?.publish_date,
        publishers: data?.publishers,
        isbn_13: data?.isbn_13,
        subjects: data?.subjects,
    }; 

    return fetchedWork;
}