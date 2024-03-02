'use client';

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";


export default function LogButton() {
    const router = useRouter();

    const logout = () => {
        signOut();
        router.push('/');
    }

    return (
        <div>
            <Button
                onClick={logout}
            >LogOut</Button>
        </div>
    )
}