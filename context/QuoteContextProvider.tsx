'use client'

import { ReactNode, useState, useEffect } from 'react';
import IQuote from '@/types/IQuote';
import QuoteContext from './QuoteContext';
import axios from 'axios';

type QuoteContextProviderProps = {
  children: ReactNode
}

type QuoteData = {
  quotes: IQuote[]
};

const QuoteContextProvider = ({ children }: QuoteContextProviderProps) => {
  const [allQuotes, setAllQuotes] = useState<IQuote[]>([]);
  const [randomQuote, setRandomQuote] = useState<IQuote>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const updateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    const quote = allQuotes[randomIndex];
    setRandomQuote(quote);
  }

  useEffect(() => {
    async function fetchQuotes() {
      try {
        setIsLoading(true);
        const response = await axios.get<QuoteData>('https://dummyjson.com/quotes');
        setAllQuotes(response.data.quotes);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log("Axios error:", err.message);
        } else {
          console.log("Error:", err);
        }
        throw (err);
      } finally {
        setIsLoading(false);
      }

    }
    fetchQuotes();
  }, []);

  if (!randomQuote && allQuotes && allQuotes.length > 0)
    updateRandomQuote();

  return <QuoteContext.Provider value={{ allQuotes, isLoading, randomQuote, updateRandomQuote }}>{children}</QuoteContext.Provider>
}

export default QuoteContextProvider;