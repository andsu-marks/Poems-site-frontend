import { Header } from "@/components/home/Header";
import { Sidebar } from "@/components/home/Sidebar";
import DefaultLayout from "./default-layout";
import { HomeLayoutProps } from "@/types/home";

export default function HomeLayout({ children }: Readonly<HomeLayoutProps>) {
  return (
    <div className="flex w-full">
      <DefaultLayout>{children}</DefaultLayout>
    </div>
  )
}