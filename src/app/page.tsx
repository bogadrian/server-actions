import styles from './page.module.css';
import Link from 'next/link';

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '200px'
        }}
      >
        <Link href="/traditional">
          <h2>Traditional React way</h2>
        </Link>
        <Link href="/external-server-actions">
          <h2>Go to external server actions</h2>
        </Link>
        <Link href="/internal-server-actions">
          <h2>Go to internal server actions</h2>
        </Link>
      </div>
    </main>
  );
}
