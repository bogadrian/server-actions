'use server';

import { revalidatePath } from 'next/cache';

export const addName = async ({ id, name }: { id: string; name: string }) => {
  const response = await fetch('http://localhost:8081/names', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, name })
  });
  const res = await response.json();

  if (res) {
    revalidatePath('/external-server-actions');
  }
};
