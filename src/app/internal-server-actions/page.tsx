import { revalidatePath } from 'next/cache.js';
import styles from '../page.module.css';
import Link from 'next/link';
import { v4 } from 'uuid';

const getData = async (): Promise<{ id: string; name: string }[]> => {
  const response = await fetch('http://localhost:8081/names');
  const names = await response.json();
  return names;
};

const InternalServerActions = async () => {
  const names = await getData();

  const handleSubmit = async (formData: FormData) => {
    'use server';

    const name = formData.get('name');

    const response = await fetch('http://localhost:8081/names', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: v4(), name })
    });
    const res = await response.json();

    if (res) {
      revalidatePath('/internal-server-actions');
      revalidatePath('/external-server-actions');
    }
  };

  return (
    <main className={styles.main}>
      <h1>Internal Server Actions</h1>
      <Link href="/">Go back Home</Link>
      <ul>
        {names.map(el => {
          return (
            <li key={el.id}>
              <h1>{el.name}</h1>
            </li>
          );
        })}
      </ul>
      <form style={{ marginTop: '100px' }} action={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="name"
          style={{ padding: '10px', fontSize: '20px' }}
        />
        <div style={{ marginTop: '20px' }} />
        <button type="submit">
          <h2>Submit</h2>
        </button>
      </form>
    </main>
  );
};

export default InternalServerActions;
