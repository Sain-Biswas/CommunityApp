"use client";
import Link from "next/link";
import logo from "../public/Premium.png";
import Image from "next/image";
import { ModeToggle } from "./ui/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { PersonIcon } from "@radix-ui/react-icons";
function Header() {
  return (
    <header className="flex items-center h-[8vh] bg-primary justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src={logo}
            alt="CONNECT SPHERE"
            width={64}
            height={64}
            />
            <h1 className="font-bold text-slate-50 font-inter text-2xl ">
                Campus Connect
            </h1>
        </Link>
        <div className="px-5 flex space-x-2 items-center">
            <Avatar className="w-14 h-14 rounded-full">
                <AvatarImage src="" alt="" />
                <AvatarFallback className="w-14 h-14 rounded-full">
                    <PersonIcon className="h-8 w-8" />
                </AvatarFallback>
            </Avatar>
            <ModeToggle />
        </div>

    </header>
  )
}

export default Header