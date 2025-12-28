import { Dashboard } from "./components/Dashboard/dashboard";
import { Sidebar } from "./components/Sidebar/sidebar";

export default function Home() {
  return (
    <main className="grid grid-cols-[250px_1fr] h-screen overflow-hidden bg-gray-100">
      <div className="h-full pt-4 pb-4 pl-4">
         <Sidebar />
       </div>
      <div className="p-5">
        <Dashboard />
      </div>
    </main>
  );
}