import { Crown, Gem, Medal, Shield, Star, Zap } from "lucide-react";

const badgeIcons = [Crown, Gem, Shield, Medal, Star, Zap];

export default function LeaderboardRow({ player }) {
  const top = player.rank <= 3;
  const Icon = top ? [Crown, Medal, Medal][player.rank - 1] : null;

  return (
    <div className={`leader-row ${top ? `top-${player.rank}` : ""}`}>
      <div className="rank-number">
        {Icon ? <Icon size={26} fill="currentColor" /> : player.rank}
      </div>

      <div className="player-cell">
        <img src={player.avatar} alt="" />
        <div>
          <strong>{player.name}</strong>
          <small>{player.team}</small>
        </div>
      </div>

      <div><span className="level-pill">Lv. {player.level}</span></div>
      <div className="score">{player.score.toLocaleString()}</div>
    </div>
  );
}