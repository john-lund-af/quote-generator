import React from 'react';
import IQuote from '@/types/IQuote';

type QuoteContextType = {
  randomQuote?: IQuote,
  updateRandomQuote: () => void;
  allQuotes: IQuote[],
  isLoading: boolean,
}

const QuoteContext = React.createContext({} as QuoteContextType);

export default QuoteContext;