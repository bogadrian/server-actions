'use client';

import { useEffect, useState, useCallback } from 'react';
import { Form } from './Form';
import Link from 'next/link';

export const Display = () => {
  const [names, setNames] = useState<{ name: string; id: string }[]>([]);

  const refetch = useCallback(() => {
    fetch('http://localhost:8081/names')
      .then(response => response.json())
      .then(data => setNames(data));
  }, []);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <h1>Traditional React way</h1>
      <h2>
        <Link href="/">Go back Home</Link>
      </h2>
      <ul>
        {names.map(el => {
          return (
            <li key={el.id}>
              <h1>{el.name}</h1>
            </li>
          );
        })}
        <Form refetch={refetch} />
      </ul>
    </>
  );
};
