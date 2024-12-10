'use client'

import { useState } from 'react';

export default function PillButton({ author }: { author: string }) {
  const [isChosen, setIsChosen] = useState<boolean>(false);

  const toggleChosen = (): void => {
    setIsChosen(!isChosen);
  }

  const selectedClasses = 'bg-blue-500 text-white';
  const notSelectedClasses = 'bg-white text-gray-900';

  return <button onClick={toggleChosen} className={`${isChosen ? selectedClasses : notSelectedClasses} py-2 px-3 text-sm cursor-pointer font-semibold text-center shadow-xs`}>{author}</button>
}