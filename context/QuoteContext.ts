import React from 'react';
import IQuote from '@/types/IQuote';

type QuoteContextType = {
  getRandomQuote: () => IQuote | null,
  isLoading: boolean,
}

const QuoteContext = React.createContext({} as QuoteContextType);

export default QuoteContext;