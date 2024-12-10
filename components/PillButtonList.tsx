'use client'

import { useContext } from 'react';
import QuoteContext from '@/context/QuoteContext';
import PillButton from './PillButton';

export default function PillButtonList() {
  const { isLoading, allQuotes } = useContext(QuoteContext);

  if (isLoading)
    return <h1 className="text-2xl">Loading...</h1>

  const authors = Array.from(new Set<string>(allQuotes.map(quote => quote.author)));
  const ascAuthors = authors.toSorted();

  return <ul className="flex gap-4 flex-wrap justify-center">
    {ascAuthors.map(author => <li key={author}><PillButton author={author} /></li>)}
  </ul>
}