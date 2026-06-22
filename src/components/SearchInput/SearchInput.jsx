import styles from './search.module.css';
import { Search } from 'lucide-react';
import { Form, useSubmit } from 'react-router';

export default function SearchInput({ action, placeholder, defaultValue }) {
  return (
    <search className={styles.search}>
      <Form action={action} method="GET">
        <label htmlFor="search">
          <span hidden={true}>Search for products</span>
          <Search aria-hidden="true" />
        </label>

        <input
          type="search"
          name="q"
          id="search"
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </Form>
    </search>
  );
}
