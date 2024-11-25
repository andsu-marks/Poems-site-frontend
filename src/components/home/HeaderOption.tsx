import { HeaderOptionsProps } from "@/types/home";
import Link from "next/link";


export function HeaderOption({ children, href }: HeaderOptionsProps) {
  return (
    <Link href={href} >
      {children}
    </Link>
  )
}