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
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getRandomQuote = (): IQuote | null => {
    if (!quotes || quotes.length === 0)
      return null;
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  }

  useEffect(() => {
    async function fetchQuotes() {
      try {
        setIsLoading(true);
        const response = await axios.get<QuoteData>('https://dummyjson.com/quotes');
        setQuotes(response.data.quotes);
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

  return <QuoteContext.Provider value={{ getRandomQuote, isLoading }}>{children}</QuoteContext.Provider>
}

export default QuoteContextProvider;