'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeftIcon, DotsHorizontalIcon, PaperPlaneIcon, PersonIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";



export default function MessageChats() {
    const router = useRouter();
    const [message, setMessage] = useState<string>('');

    return (
        <div className="w-full h-full p-2 flex flex-col">
            <div className="flex justify-between items-center pb-2 border-b">
                <div className="flex gap-1 items-center">
                    <Button
                        size='icon'
                        variant='ghost'
                        className="md:hidden"
                        onClick={() => router.push('/messaging')}
                    ><ChevronLeftIcon /></Button>
                    <Avatar className="w-14 h-14 rounded-full">
                        <AvatarImage src="" alt="" />
                        <AvatarFallback className="w-14 h-14 rounded-full">
                            <PersonIcon className="h-8 w-8" />
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1 justify-center">
                        <p className="text-xl font-mono font-bold">Mehul Shardana</p>
                        <p className="text-sm font-mono text-gray-500">mehul.shardana1548@gmail.com</p>
                    </div>
                </div>
                <Button
                    size='icon'
                ><DotsHorizontalIcon className="" /></Button>
            </div>
            <ScrollArea className="flex-grow p-2 h-[calc(92vh-7rem)]">
                <Divs />
            </ScrollArea>
            <div className="flex gap-2">
                <Input
                    placeholder="Type a Message..."
                    value={message}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)}
                />
                <Button
                    size='icon'

                >
                    <PaperPlaneIcon className="-rotate-45" />
                </Button>
            </div>
        </div>
    )
};

export function Divs() {
    return (
        <>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
            <div className="bg-primary h-36 w-60 rounded">
                Hello
            </div>
        </>
    )
}