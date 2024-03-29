import SearchBar from "../_components/search_bar/search-bar";
import styles from "./search.module.css";
import SearchResults from "./searchResults";

export default function Search () {

    return (
        <main className={styles.mainBox}>
            <div className={styles.searchBarBox}>
                <SearchBar />
            </div>
            <div className={styles.resultsBox}>
                <SearchResults />
            </div>
        </main>
      )
}