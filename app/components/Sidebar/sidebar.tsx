import AccountToggle from "./components/account-toggle";
import { Plan } from "./components/plan";
import { RouteSelect } from "./components/rout-select";
import Search from "./components/search";

export const Sidebar = () => {
  return (
    <div>
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle />
        <Search />
        <RouteSelect />
      </div>

      <Plan />
    </div>
  );
};