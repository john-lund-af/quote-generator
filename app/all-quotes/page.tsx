'use client'

import { useContext } from 'react';
import QuoteContext from '@/context/QuoteContext';
import QuoteList from '@/components/QuoteList';

export default function AllQuotesPage() {
  const { allQuotes, isLoading } = useContext(QuoteContext);
  if (isLoading)
    return <h1 className="text-4xl">Loading...</h1>

  return <main className="px-2">
    <QuoteList quotes={allQuotes} />
  </main>
}