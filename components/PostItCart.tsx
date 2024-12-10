import IQuote from "@/types/IQuote";

export default function PostItCard({ quote }: { quote: IQuote }) {
  return (
    <div className="grow p-6 bg-white border border-gray-200 rounded-lg shadow w-[360px] h-[200px]">

      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{quote.author}</h5>
      <p className="font-normal text-gray-900">{quote.quote}</p>
    </div>
  )
}