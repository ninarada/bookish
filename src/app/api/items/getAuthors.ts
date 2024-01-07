import { TypeAuthor } from "@/app/types/TypeAuthor";

export default async function getAuthor (olid: string) {
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
        console.error('Error fetching image:', error);
        return null;
    }
}