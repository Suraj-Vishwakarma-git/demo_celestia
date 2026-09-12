import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import HeroTitle from "../components/HeroTitle";
import TeamSearch from "../components/TeamSearch";
import Leaderboard from "../components/Leaderboard";
import FloatingEnvironment from "../components/FloatingEnvironment";
import { leaderboardData } from "../data/leaderboardData";
// import RunningCharacter from "../components/RunningCharacter";

export function LeaderboardPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [teamInput, setTeamInput] = useState("");

  const filtered = useMemo(() => {
    const q = teamInput.trim().toLowerCase();

    if (!q) {
      return leaderboardData;
    }

    return leaderboardData.filter((p) =>
      p.name.toLowerCase().includes(q)
    );
  }, [teamInput]);

  return (
    <div className="page">
      <div className="background-art" />
      <FloatingEnvironment />
      <Navbar open={menuOpen} setOpen={setMenuOpen} />

      <main className="content">
        {/* <RunningCharacter side="left" /> */}
        {/* <RunningCharacter side="right" /> */}

        <HeroTitle />

        <TeamSearch
          value={teamInput}
          setValue={setTeamInput}
        />

        <div className="leaderboard-frame">
          {/* <div className="stone-corner top-left" />
          <div className="stone-corner top-right" /> */}

          <Leaderboard players={filtered} />
        </div>
      </main>
    </div>
  );
}