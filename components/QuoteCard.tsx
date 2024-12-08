"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const QuoteCard = ({ quote }: { quote: string }) => {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(quote);
    alert("Quote copied to clipboard!");
  };

  return (
    <div className="max-w-sm mx-auto border border-gray-700 rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-blue-950 text-white text-lg font-bold p-4">
        Quote of the Day
      </div>

      {/* Body */}
      <div className="bg-white text-gray-800 py-6 text-center">
        <p className="text-base pb-2">{quote}</p>
        <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition duration-200">
          New Quote
        </button>
      </div>

      {/* Footer */}
      <div className="bg-blue-950 p-4">
        <button onClick={copyToClipboard}><FontAwesomeIcon icon={faCopy} /></button>
      </div>
    </div>
  );
};

export default QuoteCard;
