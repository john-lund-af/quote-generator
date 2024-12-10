import React from 'react';
import IQuote from '@/types/IQuote';

type QuoteContextType = {
  randomQuote?: IQuote,
  updateRandomQuote: () => void;
  allQuotes: IQuote[],
  isLoading: boolean,
  selectedAuthors: string[],
  alterSelectedAuthors: (author: string) => void
}

const QuoteContext = React.createContext({} as QuoteContextType);

export default QuoteContext;