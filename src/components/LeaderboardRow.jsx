import { Crown, Medal } from "lucide-react";

export default function LeaderboardRow({ player }) {
  const top = player.rank <= 3;

  const Icon = top
    ? [Crown, Medal, Medal][player.rank - 1]
    : null;

  return (
    <div className={`leader-row ${top ? `top-${player.rank}` : ""}`}>

      <div className="rank-number">
        {Icon ? (
          <Icon size={26} fill="currentColor" />
        ) : (
          player.rank
        )}
      </div>

      <div className="player-cell">
        <img src={player.avatar} alt="" />

        <div>
          <strong>{player.name}</strong>
          <small>{player.team}</small>
        </div>
      </div>

      <div className="team-size">
        {player.teamSize}
      </div>

      <div className="score">
        {player.score.toLocaleString()}
      </div>

    </div>
  );
}