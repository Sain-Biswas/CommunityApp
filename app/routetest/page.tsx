import { Button } from "@/components/ui/button";
import getCurrentUser from "@/resources/actions/getCurrentUser";
import LogButton from "./LogButton";


export default async function Page() {
    const currentUser = getCurrentUser();

    return (
        <div>
            {JSON.stringify(currentUser)}
            <LogButton />
        </div>
    )
}