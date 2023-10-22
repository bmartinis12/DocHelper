import { Button } from "@/components/ui/button";
import { ArrowRight, Frown } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="text-center flex flex-col items-center justify-center min-h-[calc(100vh-56px)]">
            <h2 className="font-semibold text-2xl sm:text-4xl">There was a problem</h2>
            <Frown className="my-3 h-20 w-20 text-red-600" />
            <p className="text-sm text-zinc-700 mb-20">We could not find the page you were looking for.</p>
            <Link href='/'>
                <Button variant='destructive'>Return Home <ArrowRight className="h-4 w-5 ml-1.5" /></Button>
            </Link>
        </div>
    )
}

export default NotFound;