import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 6C9.58172 6 6 9.58172 6 14C6 18.4183 9.58172 22 14 22C18.4183 22 22 18.4183 22 14C22 9.58172 18.4183 6 14 6Z" fill="#66B2FF" opacity="0.2"/>
              <path d="M14 8C10.6863 8 8 10.6863 8 14C8 17.3137 10.6863 20 14 20C17.3137 20 20 17.3137 20 14C20 10.6863 17.3137 8 14 8Z" fill="#66B2FF"/>
              <circle cx="12" cy="12" r="2" fill="white"/>
              <circle cx="16" cy="12" r="2" fill="white"/>
              <path d="M10 16C10 16 11.5 18 14 18C16.5 18 18 16 18 16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className={styles.logoText}>
            <span className={styles.logoTextRegular}>relations</span>
            <span className={styles.logoTextBold}>AI</span>
          </span>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Solutions</a>
          <a href="#" className={styles.navLink}>Compare us</a>
          <a href="#" className={styles.navLink}>Blogs</a>
        </nav>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
    </header>
  )
}
