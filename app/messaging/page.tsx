import ChatGroups from "./components/ChatGroups"
import NoConversation from "./components/NoConversation"


const page = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full h-full md:hidden">
                <ChatGroups />
            </div>
            <div className="h-full w-full justify-center items-center hidden md:flex">
                <NoConversation />
            </div>
        </div>
    )
}

export default page