import getCurrentUser from "@/resources/actions/getCurrentUser";
import LogButton from "./LogButton";


export default async function Page() {
    const currentUser = await getCurrentUser();

    return (
        <div>
            {JSON.stringify(currentUser)}
            <LogButton />
        </div>
    )
}