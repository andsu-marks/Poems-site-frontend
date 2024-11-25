import { Header } from "@/components/home/Header";
import { Sidebar } from "@/components/home/Sidebar";

export default function DefaultLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full">
      <Sidebar/>
      <div className="flex flex-col w-full">
        <Header/>
        <main>{children}</main>
      </div>
    </div>
  )
}