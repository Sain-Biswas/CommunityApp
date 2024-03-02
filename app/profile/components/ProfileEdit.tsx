"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { Users } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Users } from "@prisma/client";
import { PersonIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  collegeName: z.string(),
});

function ProfileEdit({
  user
}: {
  user: Users | null
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center">

        <Avatar className="w-64 h-64 rounded-ful justify-center items-center flex flex-col">
          <AvatarImage src="" alt="" />
          <AvatarFallback className="w-72 h-72 rounded-full">
            <PersonIcon className="h-56 w-56" />
          </AvatarFallback>
        </Avatar>

        <Form {...form}>
          <div className="flex flex-col items-center">

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 justify-center items-center flex flex-col">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="justify-center items-center flex flex-col text-white">
                    <FormLabel>Username</FormLabel>
                    <FormControl className="w-80">
                      <Input placeholder="" defaultValue={user?.name || ''} {...field} />
                    </FormControl>
                    <FormDescription className="text-white">
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem className="justify-center items-center flex flex-col text-white">
                    <FormLabel>Email</FormLabel>
                    <FormControl className="w-80">
                      <Input placeholder="" defaultValue={user?.email || ''} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>

                )}
              />
              <FormField
                name="collegeName"
                render={({ field }) => (
                  <FormItem className="justify-center items-center flex flex-col text-white">
                    <FormLabel>College Name</FormLabel>
                    <FormControl className="w-80">
                      <Input placeholder="" defaultValue={user?.collegeName || ''} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>

                )}
              />

              <Button className="flex items-center justify-center p-x-10 text-white" type="submit">Save Changes</Button>
            </form>
          </div>
        </Form>
      </div>
    </>



  )
}

export default ProfileEdit