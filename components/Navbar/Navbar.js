import styles from './Navbar.module.css'

function Navbar({ children }) {
  return (
    <nav className={styles.root}>
      <div className={styles.container}>{children}</div>
    </nav>
  )
}

Navbar.styles = styles

export default Navbar
