import Image from 'next/image';

export default function Header() {
  return <header className="flex justify-start items-center ps-2 py-4 gap-4 shadow-md antialiased bg-blue-900">
    <span><Image src="/icon.png" width={50} height={50} alt="Quotation mark" /></span>
    <span><h1 className="text-4xl">Quotation Generator</h1></span>
  </header>
}