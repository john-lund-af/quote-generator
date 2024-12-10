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
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);

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

  const alterSelectedAuthors = (author: string): void => {
    const foundActor = selectedAuthors.find(a => a === author);
    if (foundActor)
      setSelectedAuthors(selectedAuthors.filter(a => a !== author));
    else
      setSelectedAuthors([...selectedAuthors, author]);
  }

  if (!randomQuote && allQuotes && allQuotes.length > 0)
    updateRandomQuote();

  return <QuoteContext.Provider value={{ allQuotes, isLoading, randomQuote, updateRandomQuote, selectedAuthors, alterSelectedAuthors }}>{children}</QuoteContext.Provider>
}

export default QuoteContextProvider;