"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const QuoteCard = ({ quote }: { quote: string }) => {

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(quote);
    alert("Quote copied to clipboard!");
  };

  return (
    <div className="max-w-sm mx-auto border border-gray-700 rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-blue-950 text-white text-lg font-bold p-4 text-center">
        Quote of the Day
      </div>

      {/* Body */}
      <div className="bg-white text-gray-800 p-6 text-center">
        <p className="text-base pb-2">{quote}</p>
        <p className="text-right italic">-- author name</p>
        <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition duration-200">
          New Quote
        </button>
      </div>

      {/* Footer */}
      <div className="bg-blue-950 p-4 text-right">
        <button className='hover:text-gray-400 transition duration-200' onClick={copyToClipboard}><FontAwesomeIcon icon={faCopy} /></button>
      </div>
    </div>
  );
};

export default QuoteCard;
