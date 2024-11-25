import Link from "next/link";
import { CircleUserRound, HomeIcon, LogOut } from "lucide-react";

import { SidebarSeparator } from "./SidebarSeparator";
import { SidebarOption } from "./SidebarOption";

export function Sidebar() {
  return (
    <aside
    className="bg-grayDefault h-screen w-64 z-50 shadow-2xl"
    >
      <Link 
        href="./home"  
        className="font-handwriting text-6xl text-oldPaper flex items-center justify-start m-4 hover:text-oldPaper-dark"
      >
        Poems
      </Link>

      <SidebarSeparator/>

      <SidebarOption href="./home">
        <HomeIcon/><span>Home</span>
      </SidebarOption>
      <SidebarOption href="#">
        <CircleUserRound/><span>My Profile</span>
      </SidebarOption>

      <SidebarSeparator/>

      <SidebarOption href="./">
        <LogOut/><span>Logout</span>
      </SidebarOption>
    </aside>
  )
}