import styles from './button.module.css';

export default function Button({ children, type, ...props }) {
  return (
    <button {...props} className={styles[type]}>
      {children}
    </button>
  );
}
