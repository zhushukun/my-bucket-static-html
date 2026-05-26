import type { Activity } from "../data/mock";
import "./ActivityFeed.css";

interface ActivityFeedProps {
  activities: Activity[];
}

const actionColors: Record<string, string> = {
  uploaded: "action-upload",
  downloaded: "action-download",
  shared: "action-share",
  created: "action-create",
  deleted: "action-delete",
  renamed: "action-rename",
};

const actionIcons: Record<string, string> = {
  uploaded: "icon-upload",
  downloaded: "icon-trend-down",
  shared: "icon-users",
  created: "icon-check-circle",
  deleted: "icon-x",
  renamed: "icon-settings",
};

function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="activity-card">
      <div className="activity-header">
        <h3 className="activity-title">Recent Activity</h3>
        <a href="#" className="activity-action">
          View all
          <svg width="14" height="14" aria-hidden="true">
            <use href="/icons.svg#icon-chevron-right" />
          </svg>
        </a>
      </div>
      <ul className="activity-list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-item">
            <div
              className={`activity-icon ${actionColors[activity.action] || ""}`}
            >
              <svg width="14" height="14" aria-hidden="true">
                <use
                  href={`/icons.svg#${actionIcons[activity.action] || "icon-file"}`}
                />
              </svg>
            </div>
            <div className="activity-content">
              <span className="activity-text">
                <strong>{activity.user}</strong> {activity.action}{" "}
                <span className="activity-target">{activity.target}</span>
              </span>
            </div>
            <span className="activity-time">
              <svg width="12" height="12" aria-hidden="true">
                <use href="/icons.svg#icon-clock" />
              </svg>
              {activity.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityFeed;
