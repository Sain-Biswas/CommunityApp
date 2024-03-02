import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

export default function MessageLoading() {

    return (
        <div className="w-full h-full p-2 flex flex-col">
            <div className="flex justify-between items-center pb-2 border-b">
                <div className="flex gap-2 items-center">
                    <ChevronLeftIcon className="pr-2 w-6 md:hidden" />
                    <Skeleton className="h-14 w-14 rounded-full" />
                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-4 w-56" />
                        <Skeleton className="h-2 w-56" />
                    </div>
                </div>
                <Skeleton className="h-9 w-9" />
            </div>
            <div className="flex-grow flex-col flex justify-end my-4 gap-2">
                <div className="flex gap-2 items-start">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div>
                        <Skeleton className="h-3 mb-1 w-60" />
                        <Skeleton className="h-16 w-60" />
                    </div>
                </div>
                <div className="flex gap-2 items-start flex-row-reverse">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div>
                        <Skeleton className="h-3 mb-1 w-60" />
                        <Skeleton className="h-16 w-60" />
                    </div>
                </div>
                <div className="flex gap-2 items-start">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div>
                        <Skeleton className="h-3 mb-1 w-60" />
                        <Skeleton className="h-16 w-60" />
                    </div>
                </div>
                <div className="flex gap-2 items-start flex-row-reverse">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div>
                        <Skeleton className="h-3 mb-1 w-60" />
                        <Skeleton className="h-16 w-60" />
                    </div>
                </div>
            </div>
            <div className="flex gap-2">
                <Skeleton className="h-9 w-full" />
                <Skeleton className="h-9 w-9" />
            </div>
        </div>
    )
};