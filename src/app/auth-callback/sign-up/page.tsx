import { RegisterLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { buttonVariants } from "@/components/ui/button";
import { redirect } from "next/navigation";

const SignUp = () => {
    const { getUser } = getKindeServerSession();
    const user = getUser();

    if (user) redirect('/dashboard');

    return (
        <div className="w-full mt-24 flex justify-center">
            <div className="flex flex-col items-center gap-2">
                <h3 className="font-semibold text-4xl text-center">Sign Up</h3>
                <p className="text-md text-center text-zinc-500 my-5">Register for an account and experince the power of DocHelper!</p>
                <RegisterLink className={buttonVariants({ size: 'lg', className: 'mt-5' })}>Sign Up</RegisterLink>
            </div>
        </div>
    )
}

export default SignUp;