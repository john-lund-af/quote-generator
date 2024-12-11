'use client'

import { useContext } from 'react';
import QuoteContext from '@/context/QuoteContext';

type PillButtonProps = {
  author: string
}

export default function PillButton({ author }: PillButtonProps) {
  const { alterSelectedAuthors, selectedAuthors } = useContext(QuoteContext);

  const cssClasses = selectedAuthors.find(a => a === author) ? 'bg-blue-500 text-white' : 'bg-white text-gray-900';

  return <button onClick={() => alterSelectedAuthors(author)} className={`${cssClasses} py-2 px-3 text-sm cursor-pointer font-semibold text-center shadow-xs`}>{author}</button>
}