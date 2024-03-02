import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ProfileEdit from "./ProfileEdit";
import { Users } from "@prisma/client";

function Edit({
  user
}: {
  user: Users | null
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-primary text-2xl p-5 m-10">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <ProfileEdit user={user} />
      </DialogContent>
    </Dialog>
  )
}

export default Edit;