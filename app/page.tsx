import Header from "@/components/Header";
import QuoteCard from '../components/QuoteCard';

export default function Home() {
  return (
    <div className="container text-white">
      <Header></Header>
      <main className="">
        <h1>Home Page</h1>
        <QuoteCard quote="This is the legend of Cassius Clay" />
      </main>
    </div>
  );
}
