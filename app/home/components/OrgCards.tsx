"use client";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import OrganisationIcon from "@/resources/Icons/OrganisationIcon";
import { Avatar } from "@radix-ui/react-avatar";
import { ChevronRightIcon } from "@radix-ui/react-icons";


type Props = {
    title: string,
    description: string,
    image: string,
    link: string
}
function OrgCards ({title, description, image, link}: Props) {
    return (
        <Card className="ring ">
                <CardHeader className="flex gap-2">
                    <CardTitle className="font-bold flex gap-2 items-center text-2xl">
                    <Avatar className="w-14 h-14 rounded-full">
                        <AvatarImage src={image} alt={title} />
                        <AvatarFallback className="w-14 h-14 rounded-full">
                            <OrganisationIcon className="h-8 w-8" />
                        </AvatarFallback>
                    </Avatar>
                        {title}
                        </CardTitle>
                    <CardDescription className="text-center">{description}</CardDescription>
                </CardHeader>
                
                <CardFooter className="flex justify-end">
                    <Button>
                        <span>
                            See More!
                        </span>
                        <ChevronRightIcon className="h-6 w-6" />
                    </Button>
                </CardFooter>
        </Card>

    );
}

export default OrgCards;

