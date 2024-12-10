'use client'

import { useContext } from 'react';
import QuoteContext from '@/context/QuoteContext';
import QuoteList from '@/components/QuoteList';

export default function AllQuotesPage() {
  const { allQuotes, isLoading, selectedAuthors } = useContext(QuoteContext);
  if (isLoading)
    return <h1 className="text-4xl">Loading...</h1>

  const filteredQuotes = selectedAuthors.length === 0 ? [...allQuotes] : allQuotes.filter(quote => selectedAuthors.includes(quote.author));

  return <main className="px-2">
    <QuoteList quotes={filteredQuotes.toSorted((a, b) => a.author.localeCompare(b.author))} />
  </main>
}