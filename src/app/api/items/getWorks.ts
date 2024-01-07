import { TypeWork } from "@/app/types/TypeWork";

export default async function getWork(OLID: string): Promise<TypeWork> {

    try {
        const response = await fetch(`https://openlibrary.org/works/${OLID}.json`);
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
        throw new Error(`Unable to fetch work with OLID: ${OLID}`);
    }
}