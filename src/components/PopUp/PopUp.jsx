import { useEffect } from 'react';
import styles from './popUp.module.css';
import { Check } from 'lucide-react';

export default function PopUp({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const timeout = setTimeout(() => onClose(), 2000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div className={styles.popup}>
      Product added <Check />
    </div>
  );
}
