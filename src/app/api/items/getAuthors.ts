import { TypeAuthor } from "@/app/types/TypeAuthor";

export default async function getAuthor (olid: string): Promise<TypeAuthor> {
    try {
        const response = await fetch(`https://openlibrary.org/authors/${olid}.json`);
        const data = await response.json();

        const fetchedAuthor: TypeAuthor = {
            name: data.name,
            key: data.key,
        }
        return fetchedAuthor;
    } 
    catch (error){
        throw new Error(`Unable to fetch author with OLID: ${olid}`);
    }
}