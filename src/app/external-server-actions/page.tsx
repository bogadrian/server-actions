import styles from '../page.module.css';
import { ExternalForm } from '../../components/client/ExternalForm/ExternalForm';
import Link from 'next/link';

const getData = async (): Promise<{ id: string; name: string }[]> => {
  const response = await fetch('http://localhost:8081/names');
  const names = await response.json();
  return names;
};

const ExternalServerActions = async () => {
  const names = await getData();
  return (
    <main className={styles.main}>
      <h1>External Server Actions</h1>
      <Link href="/">Go back Home</Link>
      <ul>
        {names.map(el => {
          return (
            <li key={el.id}>
              <h1>{el.name}</h1>
            </li>
          );
        })}
        <ExternalForm />
      </ul>
    </main>
  );
};

export default ExternalServerActions;
