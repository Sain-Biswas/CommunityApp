import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PersonIcon } from "@radix-ui/react-icons"


const Page = () => {
    return (
        <main className="p-2">
            <div>
                <div className="flex gap-4">
                    <Avatar className="w-36 h-36">
                        <AvatarImage src="" alt="" />
                        <AvatarFallback className="w-36 h-36"><PersonIcon className="w-28 h-28" /></AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-5xl font-mono">Mehul Shardana</p>
                        <p className="">mehul.sardana54984@gmail.com</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page