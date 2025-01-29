import { GetAvailableCredits } from "@/actions/billing/getAvailableCredits";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import ReactCountUpWrapper from "@/components/ReactCountUpWrapper";
import { CoinsIcon } from "lucide-react";
import CreditsPurchased from "./_components/CreditsPurchased";

export default function BillingPage() {
  return (
    <div className="mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold">Billing</h1>
      <Suspense fallback={<Skeleton className="h-[166px] w-full" />}>
        <BalanceCard />
      </Suspense>
      <CreditsPurchased/>
    </div>
  );
}

async function BalanceCard() {
  const userBalance = await GetAvailableCredits();
  return (
    <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20 shadowlg flex flex-col justify-between overflow-hidden">
      <CardContent className="p-6 relative items-center">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg  font-semibold text-foreground mb-1">
              Available Credits
            </h3>
            <p className="text-4xl font-bold text-primary">
              <ReactCountUpWrapper value={userBalance} />
            </p>
          </div>
          <CoinsIcon size={140 } className="text-primary opacity-20 absolute bottom-0 right-0"/>
        </div> 
      </CardContent>

      <CardFooter className="text-muted-foreground text-sm">
        When your credit balance reaches zero, your workflow will stop working
      </CardFooter>
    </Card>
  );
}
