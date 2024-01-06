import Image from 'next/image';
import styles from "./home.module.css";
import SearchBar from './_components/search_bar/search-bar';

export default function Home() {
  return (
    <>
    <main>
      <div className={styles.frame1}>
        <div className={styles.leftHero}>
          <h1 className={styles.header1}>Welcome to Your Literary Haven!</h1>
          <p className={styles.p1}>Discover, Track, and Dive into the World of Books.</p>
          <SearchBar />
        </div>
        <div className={styles.rightHero}>
          <Image src={'/images/books.png'} alt="hero" height={500} width={500}></Image>
        </div>
      </div>

      <div className={styles.frame2}>
        <div className={styles.feature}>
          <h2>Discover</h2>
          <p>Explore a diverse library of books across genres. Find hidden gems and discover new authors.</p>
        </div>
        <div className={styles.feature}>
          <h2>Track</h2>
          <p>Set reading goals, track your progress, and organize your reading list efficiently.</p>
        </div>
        <div className={styles.feature}>
          <h2>Connect</h2>
          <p>Join a vibrant community of book enthusiasts. Share your thoughts, recommendations, and connect with like-minded readers.</p>
        </div>
      </div>
    </main>
    </>
    
  )
}
