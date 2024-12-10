import Image from 'next/image';
import Navbar from './Navbar';

export default function Header() {
  return <header className="fixed top-0 w-full flex justify-between items-center px-2 shadow-md antialiased bg-blue-900">
    <Image src="/icon.png" width={50} height={50} alt="Quotation mark" />
    <Navbar />
  </header>
}