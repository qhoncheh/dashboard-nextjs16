import { ActivityGraph } from "./activity-graph";
import { RecentTransactions } from "./recent-transations";
import { StatCards } from "./stadt-card";
import { UsageRadar } from "./usage";


export const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      <StatCards />
      <ActivityGraph />
      <UsageRadar />
      <RecentTransactions />
    </div>
  );
};