import styles from './button.module.css';

export default function Button({ children, type }) {
  return <button className={styles[type]}>{children}</button>;
}
