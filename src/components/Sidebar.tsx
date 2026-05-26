import { useState } from "react";
import "./Sidebar.css";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard", active: true },
  { id: "files", label: "Files", icon: "files", active: false },
  { id: "upload", label: "Upload", icon: "upload", active: false },
  { id: "team", label: "Team", icon: "users", active: false },
  { id: "settings", label: "Settings", icon: "settings", active: false },
];

interface SidebarProps {
  collapsed: boolean;
  onClose: () => void;
}

function Sidebar({ collapsed, onClose }: SidebarProps) {
  const [activeNav, setActiveNav] = useState("dashboard");

  return (
    <>
      {collapsed && (
        <div className="sidebar-overlay" onClick={onClose} aria-hidden="true" />
      )}
      <aside
        className={`sidebar${collapsed ? "" : " collapsed"}`}
        aria-label="Main navigation"
      >
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
            <span className="sidebar-logo-text">MyBucket</span>
          </div>
          <button
            className="sidebar-close"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <svg width="20" height="20" aria-hidden="true">
              <use href="/icons.svg#icon-x" />
            </svg>
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`sidebar-nav-item${activeNav === item.id ? " active" : ""}`}
              onClick={() => setActiveNav(item.id)}
              aria-current={activeNav === item.id ? "page" : undefined}
            >
              <svg width="20" height="20" aria-hidden="true">
                <use href={`/icons.svg#icon-${item.icon}`} />
              </svg>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="sidebar-user-avatar" aria-hidden="true">
              A
            </div>
            <div className="sidebar-user-info">
              <span className="sidebar-user-name">Alice Chen</span>
              <span className="sidebar-user-role">Admin</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
