import "./Header.css";

interface HeaderProps {
  onMenuClick: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-left">
        <button
          className="header-menu-btn"
          onClick={onMenuClick}
          aria-label="Toggle sidebar"
        >
          <svg width="20" height="20" aria-hidden="true">
            <use href="/icons.svg#icon-menu" />
          </svg>
        </button>
        <div className="header-search" role="search">
          <svg
            className="header-search-icon"
            width="18"
            height="18"
            aria-hidden="true"
          >
            <use href="/icons.svg#icon-search" />
          </svg>
          <input
            id="header-search"
            name="search"
            type="search"
            className="header-search-input"
            placeholder="Search files..."
            aria-label="Search files"
          />
        </div>
      </div>

      <div className="header-right">
        <button className="header-icon-btn" aria-label="Notifications">
          <svg width="20" height="20" aria-hidden="true">
            <use href="/icons.svg#icon-bell" />
          </svg>
          <span className="header-badge">3</span>
        </button>
        <div className="header-divider" />
        <button className="header-user-btn" aria-label="User menu">
          <div className="header-user-avatar" aria-hidden="true">
            A
          </div>
          <span className="header-user-name">Alice Chen</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
