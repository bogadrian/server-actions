'use client';

import { useRef } from 'react';
import { v4 } from 'uuid';
import { addName } from '@/components/server/actions';

export const ExternalForm = () => {
  const value = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = value.current?.value;
    if (name) addName({ id: v4(), name });
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
