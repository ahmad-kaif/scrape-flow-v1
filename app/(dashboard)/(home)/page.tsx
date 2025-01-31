import { GetPeriods } from "@/actions/analytics/getPeriods";
import React, { Suspense } from "react";
import PeriodSelector from "./_components/PeriodSelector";
import { Period } from "@/types/analytics";
import { Skeleton } from "@/components/ui/skeleton";
import { GetStatsCardsValues } from "@/actions/analytics/getStatsCardsValues";
import { CirclePlayIcon, CoinsIcon, WaypointsIcon } from "lucide-react";
import StatsCard from "./_components/StatsCard";
import { GetWorkflowExecutionStats } from "@/actions/analytics/getWorkflowExecutionStats";
import ExecutionStatusChart from "./_components/ExecutionStatusChart";
import { GetCreditUsageInPeriod } from "@/actions/analytics/getCreditUsageInPeriod";
import CreditUsageChart from "../billing/_components/CreditUsageChart";

const HomePage = async ({ searchParams }: { searchParams: { month?: string; year?: string } }) => {
  const currentDate = new Date();
  
  const period: Period = {
    month: searchParams.month ? parseInt(searchParams.month) : currentDate.getMonth(),
    year: searchParams.year ? parseInt(searchParams.year) : currentDate.getFullYear(),
  };

  const periods = await GetPeriods();
  const statsData = await GetStatsCardsValues(period);
  const executionStats = await GetWorkflowExecutionStats(period);
  const creditUsageData = await GetCreditUsageInPeriod(period);

  return (
    <div className="flex flex-1 flex-col h-full">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Home</h1>
        <Suspense fallback={<Skeleton className="w-[180px] h-[40px]" />}>
          <PeriodSelector selectedPeriod={period} periods={periods} />
        </Suspense>
      </div>
      <div className="h-full py-6 flex flex-col gap-4">
        <Suspense fallback={<StatsCardSkeleton />}>
          <StatsCards data={statsData} />
        </Suspense>
        <Suspense fallback={<Skeleton className="w-full h-[300px]" />}>
          <ExecutionStatusChart data={executionStats} />
        </Suspense>
        <Suspense fallback={<Skeleton className="w-full h-[300px]" />}>
          <CreditUsageChart data={creditUsageData} title="Daily credits spent" description="Daily credit consumed in selected period" />
        </Suspense>
      </div>
    </div>
  );
};

const StatsCards = ({ data }: { data: Awaited<ReturnType<typeof GetStatsCardsValues>> }) => (
  <div className="grid gap-3 lg:gap-8 lg:grid-cols-3 min-h-[120px]">
    <StatsCard title="Workflow execution" value={data.workflowExecutions} icon={CirclePlayIcon} />
    <StatsCard title="Phase execution" value={data.phaseExecutions} icon={WaypointsIcon} />
    <StatsCard title="Credits Consumed" value={data.creditsConsumed} icon={CoinsIcon} />
  </div>
);

const StatsCardSkeleton = () => (
  <div className="grid gap-3 lg:gap-8 lg:grid-cols-3">
    {[1, 2, 3].map((i) => (
      <Skeleton key={i} className="w-full min-h-[120px]" />
    ))}
  </div>
);

export default HomePage;
