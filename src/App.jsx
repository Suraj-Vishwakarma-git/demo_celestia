import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { LeaderboardPage } from "./pages/LeaderboardPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}