import { Grid } from "./components/grid";
import { TopBar } from "./components/top-bar";

export const Dashboard = () => {
  return (
    <div className="bg-white rounded-lg pb-4 shadow">
      <TopBar />
      <Grid />
    </div>
  );
};