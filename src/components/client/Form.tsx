'use client';

import { useRef } from 'react';
import { v4 } from 'uuid';
import { useRouter } from 'next/navigation';

export const Form = ({ refetch }: { refetch?: () => void }) => {
  const { refresh } = useRouter();
  const value = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = value.current?.value;

    const response = await fetch('http://localhost:8081/names', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: v4(), name })
    });
    const res = await response.json();

    if (res && value.current) {
      refetch?.();
      value.current.value = '';
    }
  };

  return (
    <form style={{ marginTop: '100px' }} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        style={{ padding: '10px', fontSize: '20px' }}
        ref={value}
      />
      <div style={{ marginTop: '20px' }} />
      <button type="submit">
        <h2>Submit</h2>
      </button>
    </form>
  );
};
