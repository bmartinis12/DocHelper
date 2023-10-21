import BillingForm from "@/components/BillingForm";
import { getUserSubscriptionPlan } from "@/lib/stripe";

const Page = async () => {
    const subscriptionPage = await getUserSubscriptionPlan();

    return <BillingForm subscriptionPlan={subscriptionPage} />

}

export default Page;