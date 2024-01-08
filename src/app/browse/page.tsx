import getBooksBySubjectName from "../api/items/getBooksBySubjectName";
import getAuthor from "../api/items/getAuthors";
import extractKeyFromArray from "../api/functions/extractKeyFromArray";
import BookSlider from "../_components/books_slider/slider";
import { TypeWork } from "../types/TypeWork";
import { TypeAuthor } from "../types/TypeAuthor";
import styles from "./browse.module.css";
import getSubject from "../api/functions/getSubject";

export default async function Browse () {
    const fiction: {keyWork: TypeWork, keyAuthor: TypeAuthor[]} [] = await getSubject('fiction', '6');

    return (
        <main>

            <div>
              <h2>Fiction</h2>
              <BookSlider subject={fiction}/>
            </div>
            
        </main>
      )
}