import Image from 'next/image';
import styles from "./home.module.css";
import SearchBar from './_components/search_bar/search-bar';
import BookSlider from './_components/books_slider/slider';
import Link from 'next/link';
import { TypeWork } from './types/TypeWork';
import { TypeAuthor } from './types/TypeAuthor';
import makeSubject from './api/nytimes/makeSubject';

export default async function Home() {
  const bestsellers: {keyWork: TypeWork, keyAuthor: TypeAuthor[]} [] =  await makeSubject('hardcover-fiction', '2023-12-05', '2023-12-20');

  return (
    <>
    <main>
      <div className={styles.frame1}>
        <div className={styles.container1}>
          <h1 className={styles.logo}>bookish</h1>
          <SearchBar />
        </div>
      </div>

      <div className={styles.hero_bestsellers}>
        <h2 className={styles.header2}>Bestsellers</h2>
        <BookSlider subject={bestsellers}/>
        <Link href={`browse/bestsellers`} className={styles.showMore}>show more</Link>
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
