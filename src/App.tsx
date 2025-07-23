import { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import type { Tab } from "./components/navigation/types";
import { navigationTabs } from "./constants/navigation";

function App() {
  const [activeTab, setActiveTab] = useState<Tab>(navigationTabs[0]);

  const ActiveComponent = activeTab?.component;
  return (
    <>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        <div className="relative bg-gradient-to-br min-h-[90vh] from-blue-50 via-white to-green-50 py-15 transition-colors duration-200">
          <div className="flex flex-col items-center">
          <ActiveComponent setActiveTab={setActiveTab} />
          </div>
        </div>
      </main>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse`}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-40 h-40 bg-green-100
        rounded-full opacity-20 animate-pulse delay-1000`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/4 w-24 h-24
         bg-orange-100
        rounded-full opacity-20 animate-pulse delay-500`}
        ></div>
      </div>
    </>
  );
}

export default App;
