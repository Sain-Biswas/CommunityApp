'use client';

import { useState } from "react";

const ChatRoutes = () => {
    const [filterText, setFilterText] = useState<string>('');

    return (
        <div className="flex w-full h-full">
            <p className="text-3xl font-mono text-center font-bold">Conversations</p>
        </div>
    )
}

export default ChatRoutes