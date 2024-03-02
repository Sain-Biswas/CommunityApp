import React from "react"
import ChatGroups from "./components/ChatGroups"
import Header from "@/components/Header"


const layout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <Header />
        <div className="flex h-[92vh]">
            <div className="w-64 border-r border-primary hidden md:block">
                <ChatGroups />
            </div>
            <div className="flex-grow">
                {children}
            </div>
        </div>
        </>
        
    )
}

export default layout