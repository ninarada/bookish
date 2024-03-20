import SearchBar from "../_components/search_bar/search-bar";
import SearchFilter from "../_components/search_bar/searchFilter";
import styles from "./search.module.css";
import SearchResults from "./searchResults";

export default function Search () {

    return (
        <main className={styles.mainBox}>
            <div className={styles.searchBarBox}>
                <SearchBar />
            </div>
            <div className={styles.resultsBox}>
                <SearchFilter />
                <SearchResults />
                <div className={styles.paginationBox}>
                    <div className={styles.pages}>previous</div>
                    <div className={styles.pages}>next</div>
                </div>
            </div>
        </main>
      )
}