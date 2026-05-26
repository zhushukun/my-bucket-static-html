import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsGrid from "./components/StatsGrid";
import ChartsRow from "./components/ChartsRow";
import FileTable from "./components/FileTable";
import ActivityFeed from "./components/ActivityFeed";
import {
  stats,
  recentFiles,
  activities,
  storageTrend,
  fileTypeDistribution,
} from "./data/mock";
import "./App.css";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <div className="app-layout">
      <Sidebar
        collapsed={sidebarCollapsed}
        onClose={() => setSidebarCollapsed(true)}
      />

      <div className="main-content">
        <Header onMenuClick={() => setSidebarCollapsed(false)} />

        <main className="main-area">
          <div className="page-header">
            <h1 className="page-title">Dashboard</h1>
            <p className="page-description">
              Overview of your cloud storage buckets
            </p>
          </div>

          <StatsGrid stats={stats} />
          <ChartsRow
            storageData={storageTrend}
            typeData={fileTypeDistribution}
          />

          <div className="data-section">
            <div className="data-section-main">
              <FileTable files={recentFiles} />
            </div>
            <div className="data-section-side">
              <ActivityFeed activities={activities} />
            </div>
          </div>

          <footer className="footer">
            <span>MyBucket &copy; 2026</span>
            <span>Cloud Storage Platform</span>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
