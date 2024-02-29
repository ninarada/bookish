import Image from 'next/image';
import styles from "./home.module.css";
import SearchBar from './_components/search_bar/search-bar';

export default function Home() {
  return (
    <>
    <main>
      <div className={styles.frame1}>
        <div className={styles.container1}>
          <h1 className={styles.logo}>bookish</h1>
          <SearchBar />
        </div>
      </div>

      <div className={styles.frame2}>
        <div className={styles.feature}>
          <h2 className={styles.header2}>Discover</h2>
          <p className={styles.p2}>Explore a diverse library of books across genres. Find hidden gems and discover new authors.</p>
        </div>
        <div className={styles.feature}>
          <h2 className={styles.header2}>Track</h2>
          <p className={styles.p2}>Set reading goals, track your progress, and organize your reading list efficiently.</p>
        </div>
        <div className={styles.feature}>
          <h2 className={styles.header2}>Connect</h2>
          <p className={styles.p2}>Join a vibrant community of book enthusiasts. Share your thoughts, recommendations, and connect with like-minded readers.</p>
        </div>
      </div>
    </main>
    </>
    
  )
}
