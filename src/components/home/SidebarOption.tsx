import Link from "next/link";
import { SidebarOptionsProps } from "@/types/home";

export function SidebarOption({ children, href }: SidebarOptionsProps) {
  return (
    <Link
      href={href}
      className="text-oldPaper text-2xl flex items-center justify-start m-4 gap-6 rounded hover:bg-grayDefault-light hover:text-oldPaper-light"
    >
      {children}
    </Link>
  )
}