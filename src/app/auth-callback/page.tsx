"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { Loader2 } from "lucide-react";

const AuthCallback = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const origin = searchParams.get('origin');

    trpc.authCallback.useQuery(undefined, {
        onSuccess: ({ success }) => {
            if (success) {
                router.push(origin ? `/${origin}` : '/dashboard');
            }
        },
        onError: (err) => {
            if (err.data?.code === 'UNAUTHORIZED' || err.data?.code === 'INTERNAL_SERVER_ERROR') {
                router.push('/auth-callback/sign-in')
            }
        },
        retry: 5,
        retryDelay: 500,
    })

    return (
        <div className="w-full mt-24 flex justify-center">
            <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
                <h3 className="font-semibold text-xl">Setting up your account....</h3>
                <p>Your will be redirected shortly.</p>
                <p className="text-sm text-zinc-500">If you feel an error has occured please try signing in again.</p>
            </div>
        </div>
    )
}

export default AuthCallback;