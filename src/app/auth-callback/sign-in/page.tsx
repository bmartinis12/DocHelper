import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { buttonVariants } from "@/components/ui/button";

const SignIn = () => {
    return (
        <div className="w-full mt-24 flex justify-center">
            <div className="flex flex-col items-center gap-2">
                <h3 className="font-semibold text-4xl text-center">Sign In</h3>
                <p className="text-md text-center text-zinc-500 my-5">Please sign in to continue to the dashboard!</p>
                <LoginLink className={buttonVariants({ size: 'lg', className: 'mt-5' })}>Sign In</LoginLink>
            </div>
        </div>
    )
}

export default SignIn;