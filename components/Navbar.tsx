'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuExpanded, setMenuExpanded] = useState<boolean>(false);

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-col flex-wrap items-center justify-between mx-auto p-4">
        <button onClick={() => setMenuExpanded(!menuExpanded)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="true">
          {menuExpanded ? <span className="text-2xl">X</span> : <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>}
        </button>
        <div className={`${!menuExpanded ? 'hidden ' : ''}bg-blue-900 md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link href="/" className="block py-2 px-3 text-white hover:text-gray-400 md:bg-transparent md:p-0" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="/all-quotes" className="block py-2 px-3 text-white hover:text-gray-400 md:hover:bg-transparent md:border-0 md:p-0">All quotes</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}