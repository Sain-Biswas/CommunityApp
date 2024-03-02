
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
// import { Users } from "@prisma/client";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PersonIcon } from "@radix-ui/react-icons";

function ProfileEdit() {
    const formSchema = z.object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
          }),
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",

        },
      })
      function onSubmit(values: z.infer<typeof formSchema>) {
        
        console.log(values)
      }
  return (
    <>
    <div className="flex flex-col justify-center items-center">

    <Avatar className="w-80 h-80 rounded-ful justify-center items-center flex flex-col">
        <AvatarImage src="" alt="" />
        <AvatarFallback className="w-70 h-70 rounded-full">
        <PersonIcon className="h-64 w-64" />
        </AvatarFallback>
    </Avatar>

    <Form {...form}>
    <div className="flex flex-col items-center">

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 justify-center items-center flex flex-col">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="justify-center items-center flex flex-col text-white">
              <FormLabel>Username</FormLabel>
              <FormControl className="w-80">
                <Input placeholder="" {...field} />
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
                        <Input placeholder="" {...field} />
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