import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.headline}>
          AI Agents that Speak, Text & Solve-Instantly!
        </h1>
        <p className={styles.subheadline}>
          AI Customer Support Platform that solves customers queries in Voice & Text across channels in multiple languages!
        </p>
        <button className={styles.demoButton}>Book a Free Demo</button>
      </div>
    </section>
  )
}
