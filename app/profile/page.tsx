import Header from "@/components/Header";
import OrgCards from "../home/components/OrgCards";
import ProfileEdit from "./components/ProfileEdit";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PersonIcon } from "@radix-ui/react-icons";
import Edit from "./components/Edit";
  
function Profile() {
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
                        <span className="text-4xl font-extrabold">John Doe</span>
                    </p>
                    <p>
                        <span className="text-3xl font-bold ">Email: </span>
                        <span className="text-4xl font-extrabold">Tattasur@gmail.com </span>
                    </p>
                    <p>
                        <span className="text-3xl font-bold">College: </span>
                        <span className="text-4xl font-extrabold">University of Texas at Dallas</span>
                    </p>
                    <div className="mt-10">

                        <Edit />
                    </div>
                </div>
            </div>
        </div>
        <div className="grid w-[34%] flex-grow h-full gap-4 p-5">
            <OrgCards 
                title="Organizations"
                description="These are the organizations you are a part of."
            />
            <OrgCards 
                title="Events"
                description="These are the events you are a part of."
            />

        </div>
    </div>
    
    
    
    </>
  )
}

export default Profile;