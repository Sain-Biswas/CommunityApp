import Header from "@/components/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import getCurrentUser from "@/resources/actions/getCurrentUser";
import { PersonIcon } from "@radix-ui/react-icons";
import OrgCards from "../home/components/OrgCards";
import Edit from "./components/Edit";
import ProfileEdit from "./components/ProfileEdit";

async function Profile() {
    const currentUser = await getCurrentUser();

    return (
        <>

            <Header />
            <div className="flex bg-[#1E5799] dark:bg-[#173353]">
                <div className="flex flex-col h-[92vh] w-[65%] space-y-4">
                    <div className="flex flex-col justify-center items-center">
                        <Avatar className="w-80 h-80 rounded-ful justify-center items-center flex flex-col">
                            <AvatarImage src="" alt="" />
                            <AvatarFallback className="w-72 h-72 rounded-full">
                                <PersonIcon className="h-56 w-56" />
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <p>
                                <span className="text-3xl font-bold ">Name: </span>
                                <span className="text-4xl font-extrabold">{currentUser?.name}</span>
                            </p>
                            <p>
                                <span className="text-3xl font-bold ">Email: </span>
                                <span className="text-4xl font-extrabold">{currentUser?.email}</span>
                            </p>
                            {
                                currentUser?.collegeName && (
                                    <p>
                                        <span className="text-3xl font-bold">College: </span>
                                        <span className="text-4xl font-extrabold">{currentUser.collegeName}</span>
                                    </p>
                                )
                            }
                            <div className="mt-10">

                                <Edit user={currentUser} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid w-[34%] flex-grow h-full gap-4 p-5">
                    <OrgCards
                        image=""
                        link=""
                        title="Organizations"
                        description="These are the organizations you are a part of."
                    />
                    <OrgCards
                        image=""
                        link=""
                        title="Events"
                        description="These are the events you are a part of."
                    />

                </div>
            </div>



        </>
    )
}

export default Profile;