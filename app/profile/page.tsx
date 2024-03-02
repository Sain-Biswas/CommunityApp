import Header from "@/components/Header";
import OrgCards from "../home/components/OrgCards";
import ProfileEdit from "./components/ProfileEdit";

function Profile() {
  return (
    <>
    
    <Header />
    <div className="flex bg-[#1E5799] dark:bg-[#173353]">
        <div className=" h-[92vh] w-[65%] ">
            
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