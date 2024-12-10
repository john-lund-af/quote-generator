'use client'

import { useState, useContext } from 'react';
import QuoteContext from '@/context/QuoteContext';

type PillButtonProps = {
  author: string
}

export default function PillButton({ author }: PillButtonProps) {
  const [isChosen, setIsChosen] = useState<boolean>(false);
  const { alterSelectedAuthors } = useContext(QuoteContext);

  const toggleChosen = (): void => {
    alterSelectedAuthors(author);
    setIsChosen(!isChosen);
  }

  const selectedClasses = 'bg-blue-500 text-white';
  const notSelectedClasses = 'bg-white text-gray-900';

  return <button onClick={toggleChosen} className={`${isChosen ? selectedClasses : notSelectedClasses} py-2 px-3 text-sm cursor-pointer font-semibold text-center shadow-xs`}>{author}</button>
}