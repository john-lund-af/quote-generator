'use client'

import QuoteCard from '../components/QuoteCard';
import QuoteContext from '@/context/QuoteContext';
import { useContext } from 'react';

export default function Home() {
  const { isLoading } = useContext(QuoteContext);

  return (
    <main className="flex items-center justify-center">
      {isLoading ? <h1 className="text-4xl">Loading...</h1>
        : <QuoteCard />}
    </main>
  );
}
