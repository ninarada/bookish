import { TypeWork } from "@/app/types/TypeWork";

export default async function getWork(OLID: string){

    if(OLID ===''){
        return null;
    }

    try {
        const response = await fetch(`https://openlibrary.org/works/${OLID}.json`);

        if (!response.ok) {
            throw new Error(`Failed to fetch work with OLID: ${OLID}. Status: ${response.status}`);
        }

        const data = await response.json();

        const fetchedWork: TypeWork = {
            key: data.key,
            title: data.title,
            authors: data.authors,
            covers: data.covers,
            description: data.description,
        }; 

        return fetchedWork;
        
    } catch (error) {
        return null;
        //throw new Error(`Unable to fetch work with OLID: ${OLID}`);
    }
}