import { CircleUserRound, LogOut } from "lucide-react";
import { HeaderOption } from "./HeaderOption";

export function Header() {
  return (
    <header className="w-full h-10 flex items-center justify-between z-50 shadow">
      <span className="text-2xl m-2">Welcome <span className="font-handwriting text-4xl">Poet</span> ...</span>

      <div className="flex gap-4 m-2">
        <HeaderOption href="#">
          <CircleUserRound/>
        </HeaderOption>
        <HeaderOption href="./">
          <LogOut/>
        </HeaderOption>
      </div>
    </header>
  )
}