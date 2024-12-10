import IQuote from "@/types/IQuote";
import PostItCard from "./PostItCart";


export default function QuoteList({ quotes }: { quotes: IQuote[] }) {
  return <ul className="flex flex-wrap justify-center gap-4 py-4">
    {quotes.map(quote => <li key={quote.id}><PostItCard quote={quote} /></li>)}
  </ul>
}