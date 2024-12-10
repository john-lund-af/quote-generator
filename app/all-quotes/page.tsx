'use client'

import { useContext } from 'react';
import QuoteContext from '@/context/QuoteContext';
import QuoteList from '@/components/QuoteList';

export default function AllQuotesPage() {
  const { allQuotes, isLoading } = useContext(QuoteContext);
  if (isLoading)
    return <h1 className="text-4xl">Loading...</h1>

  return <main className="px-2">
    <h1 className="text-white text-4xl my-4">All quotes</h1>
    <QuoteList quotes={allQuotes} />
  </main>
}