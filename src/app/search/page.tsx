import SearchBar from "../_components/search_bar/search-bar";
import styles from "./search.module.css";
import SearchResults from "./searchResults";

export default function Search () {

    return (
        <main className={styles.main}>
            <div className={styles.alertBox}>
                <p>To enable CORS for this demo, please follow these steps:</p>
                <ul>
                    <li>Visit <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank" >https://cors-anywhere.herokuapp.com/corsdemo</a>.</li>
                    <li>On the CORS Anywhere demo page, find and click the button to enable CORS.</li>
                    <li>Once CORS is enabled, you can return to this page and use the features that require CORS.</li>
                </ul>
            </div>
            <div className={styles.mainBox}> 
                <div className={styles.searchBarBox}>
                    <SearchBar />
                </div>
                <div className={styles.resultsBox}>
                    <SearchResults />
                </div>
            </div>
        </main>
      )
}