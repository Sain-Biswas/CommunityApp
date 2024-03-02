import Header from "@/components/Header"
import OrgCards from "./components/OrgCards"

function page() {
  return (
    <>
    
    <Header />
    <div className="grid grid-cols-4 gap-4 p-2 ">
    <OrgCards 

        title="Title"
        description="Description"
        image="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
        link="/"
    />
    <OrgCards 

        title="Title"
        description="Description"
        image="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
        link="/"
    />
    <OrgCards 

        title="Title"
        description="Description"
        image="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
        link="/"
    />
    <OrgCards 

        title="Title"
        description="Description"
        image="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
        link="/"
    />
    <OrgCards 

        title="Title"
        description="Description"
        image="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
        link="/"
    />
    <OrgCards 

        title="Title"
        description="Description"
        image="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
        link="/"
    />
    </div>
    </>
  )
}

export default page