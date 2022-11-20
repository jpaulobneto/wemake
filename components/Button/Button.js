import styles from './Button.module.css'

function Button({ children, kind, ...props }) {
  return (
    <button className={styles.primary} {...props}>
      {children}
    </button>
  )
}

Button.styles = styles

export default Button
