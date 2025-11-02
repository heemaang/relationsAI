import styles from './page.module.css'
import Header from './components/Header'
import Hero from './components/Hero'
import DecorativeShapes from './components/DecorativeShapes'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.heroSection}>
        <div className={styles.glassOverlay}></div>
        <Hero />
        <DecorativeShapes />
      </div>
    </main>
  )
}
