"use client"

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

const DocumentPage = () => {
    const {user}=useUser()
    console.log("userloaded",user);
    return ( 
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image src='/black_logo.svg'
            alt='no data' width="300" height="300"
            className="dark:hidden"/>
            <Image src='/white_logo.svg'
            alt='no data' width="300" height="300"
            className="hidden dark:block"/>
            <h2 className="text-lg font-medium">Welcom to {user?.firstName}&apos; Noter</h2>
            <Button>
                <PlusCircle className="h-4 w-4 mr-2"/>
                Create a note
            </Button>
        </div>
     );
}
 
export default DocumentPage;