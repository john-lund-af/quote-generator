import PillButtonList from "@/components/PillButtonList";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <><header className="py-8 px-2">
    <h1 className="text-2xl pb-2">Filter by authors</h1>
    <PillButtonList />
  </header>
    {children}
  </>
}