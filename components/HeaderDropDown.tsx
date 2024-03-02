'use client';
import { Users } from "@prisma/client";
import { ExitIcon, PersonIcon } from "@radix-ui/react-icons";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ModeToggle } from "./ui/theme-toggle";

export default function HeaderDropDown({
    UserInfo
}: {
    UserInfo: Users | null
}) {
    const router = useRouter();

    function logout() {
        signOut();
        router.push('/');
    }

    return (
        <div className="px-5 flex space-x-2 items-center">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className="flex gap-3 items-center h-14 hover:bg-accent/20">
                        <Avatar className="w-12 h-12 rounded-full">
                            <AvatarImage src={UserInfo?.image || undefined} alt="" />
                            <AvatarFallback className="w-14 h-14 rounded-full">
                                <PersonIcon className="h-8 w-8" />
                            </AvatarFallback>
                        </Avatar>
                        <div className="">
                            <p className="text-lg font-bold">{UserInfo?.name}</p>
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel className="flex flex-col items-center">
                        <Avatar className="w-12 h-12 rounded-full">
                            <AvatarImage src={UserInfo?.image || undefined} alt="" />
                            <AvatarFallback className="w-14 h-14 rounded-full">
                                <PersonIcon className="h-8 w-8" />
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col items-center">
                            <p className="text-lg font-bold">{UserInfo?.name}</p>
                            <p className="text-sm text-gray-500">{UserInfo?.email}</p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => router.push('/profile')}>
                        Profile
                        <DropdownMenuShortcut>
                            <PersonIcon />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-red-600" onClick={logout}>
                        Logout
                        <DropdownMenuShortcut>
                            <ExitIcon />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
        </div>
    )
}