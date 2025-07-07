import { useState } from 'react'
import Navigation from './components/navigation/Navigation'
import type { Tab } from './components/navigation/types';
import { navigationTabs } from './constants/navigation';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>(navigationTabs[0]);

  const ActiveComponent = activeTab?.component;
  return (
    <>
    <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    <main>
      <div>
       <ActiveComponent />
      </div>
    </main>
    </>
  )
}

export default App
