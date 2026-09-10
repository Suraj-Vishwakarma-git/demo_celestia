import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroTitle from "../components/HeroTitle";
import RankCard from "../components/RankCard";
import TeamSearch from "../components/TeamSearch";
import Leaderboard from "../components/Leaderboard";
// import Pagination from "../components/Pagination";
import QuoteCard from "../components/QuoteCard";
import KeepPlaying from "../components/KeepPlaying";
import FloatingEnvironment from "../components/FloatingEnvironment";
import { leaderboardData } from "../data/leaderboardData";
import RunningCharacter from "../components/RunningCharacter";
const PAGE_SIZE = 10;

export function LeaderboardPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [teamInput, setTeamInput] = useState("");
  const [teamFilter, setTeamFilter] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = teamFilter.trim().toLowerCase();
    return q ? leaderboardData.filter((p) => p.team.toLowerCase().includes(q)) : leaderboardData;
  }, [teamFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const players = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const searchTeam = () => {
    setTeamFilter(teamInput);
    setPage(1);
  };

  return (
    <div className="page">
      <div className="background-art" />
      <FloatingEnvironment />
      <Navbar open={menuOpen} setOpen={setMenuOpen} />
      {/* <Sidebar /> */}

      <main className="content">
        <RunningCharacter side="left" />
        <RunningCharacter side="right" />
        <HeroTitle />
        {/* <RankCard /> */}
        <TeamSearch value={teamInput} setValue={setTeamInput} onSearch={searchTeam} />

        <div className="leaderboard-frame">
          <div className="stone-corner top-left" />
          <div className="stone-corner top-right" />
          <Leaderboard players={players} />
        </div>

        {/* <Pagination page={safePage} totalPages={totalPages} setPage={setPage} /> */}

        {/* <QuoteCard /> */}
        {/* <KeepPlaying /> */}
      </main>
    </div>
  );
}