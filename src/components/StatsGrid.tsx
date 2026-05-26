import type { StatCard } from "../data/mock";
import "./StatsGrid.css";

const iconMap: Record<string, string> = {
  file: "icon-file",
  storage: "icon-storage",
  upload: "icon-upload",
  visits: "icon-visits",
};

interface StatsGridProps {
  stats: StatCard[];
}

function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="stats-grid">
      {stats.map((stat) => {
        const isUp = stat.changeType === "up";
        const isNeutral = stat.changeType === "neutral";
        const trendIcon = isUp
          ? "icon-trend-up"
          : isNeutral
            ? ""
            : "icon-trend-down";
        const trendClass = isUp ? "trend-up" : isNeutral ? "" : "trend-down";

        return (
          <div key={stat.id} className="stat-card">
            <div className="stat-card-icon">
              <svg width="22" height="22" aria-hidden="true">
                <use href={`/icons.svg#${iconMap[stat.icon]}`} />
              </svg>
            </div>
            <div className="stat-card-body">
              <span className="stat-card-title">{stat.title}</span>
              <span className="stat-card-value">{stat.value}</span>
              <span className={`stat-card-change ${trendClass}`}>
                {trendIcon && (
                  <svg width="14" height="14" aria-hidden="true">
                    <use href={`/icons.svg#${trendIcon}`} />
                  </svg>
                )}
                {stat.change}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatsGrid;
