import styles from './search.module.css';
import { Search } from 'lucide-react';

export default function SearchInput({ action, placeholder }) {
  return (
    <search className={styles.search}>
      <form action={action} method="GET">
        <label htmlFor="search">
          <span hidden="true">Search for products</span>
          <Search aria-hidden="true" />
        </label>

        <input type="search" name="q" id="search" placeholder={placeholder} />
      </form>
    </search>
  );
}
