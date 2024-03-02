import getCurrentUser from "@/resources/actions/getCurrentUser";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/Premium.png";
import HeaderDropDown from "./HeaderDropDown";

export default async function Header() {
  const currentUser = await getCurrentUser();
  return (
    <header className="flex items-center h-[8vh] bg-primary justify-between">
      <Link href="/home" className="flex items-center space-x-2">
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
      <HeaderDropDown UserInfo={currentUser} />
    </header>
  )
};