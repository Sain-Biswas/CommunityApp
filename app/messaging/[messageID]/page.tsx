import MessageChats from "./components/MessageChats";
import MessageLoading from "./components/MessageLoading";


export default async function Page() {
    return (
        <div className="h-full w-full">
            <MessageChats />
        </div>
    )
}

