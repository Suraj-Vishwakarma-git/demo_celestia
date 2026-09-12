import { ChevronDown, Gamepad2, Home, Search, Settings, Star, Trophy, Users, Menu, X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { label: "HOME", icon: Home },
  { label: "GAMES", icon: Gamepad2 },
  { label: "LEADERBOARD", icon: Trophy, active: true },
  // { label: "COMMUNITY", icon: Users },
  // { label: "FEATURES", icon: Settings },
];

export default function Navbar({ open, setOpen }) {
  return (
    <header className="top-nav">
      <div className="brand">
        <span className="brand-controller"><Gamepad2 size={25} /></span>
        <span className="brand-play">CELES</span>
<span className="brand-verse">TIA</span>
      </div>

      <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`nav-links ${open ? "nav-open" : ""}`}>
        {links.map(({ label, icon: Icon, active }) => (
          label === "HOME" ? (
            <Link
              key={label}
              className="nav-link"
              to="/"
            >
              <Icon size={18} strokeWidth={2.5} />
              <span>{label}</span>
            </Link>
          ) : (
            <a
              key={label}
              className={active ? "nav-link active" : "nav-link"}
              href={`#${label.toLowerCase()}`}
            >
              <Icon size={18} strokeWidth={2.5} />
              <span>{label}</span>
            </a>
  )
))}
      </nav>

      <div className="nav-actions">
        <label className="player-search">
          <Search size={18} />
          <input placeholder="Search players..." aria-label="Search players" />
        </label>
        {/* <button className="icon-btn notification" aria-label="Notifications">
          <Bell size={21} />
          <i />
        </button> */}
        <button className="profile-chip" aria-label="Profile">
          <img src="https://api.dicebear.com/9.x/pixel-art/svg?seed=playverse-user" />
          <ChevronDown size={15} />
        </button>
        <button className="lets-play"><Sparkles size={17} /> LET'S PLAY <span>▶</span></button>
      </div>
    </header>
  );
}