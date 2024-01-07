import getBooksBySubjectName from "../api/items/getBooksBySubjectName";
import BookSlider from "../_components/books_slider/slider";
import styles from "./browse.module.css";

export default async function Browse () {
    
    const fiction = await getBooksBySubjectName('fiction', '6');

    return (
        <main>

            <div>
              <h2>Fiction</h2>
              <BookSlider {...fiction}/>
            </div>
            
        </main>
      )
}