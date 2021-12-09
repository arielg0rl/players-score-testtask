import React, { useState } from "react"
import { IPlayer } from "../types"

export interface Props {
  players: IPlayer[];
}

export const PlayersList: React.FC<Props> = ({ players }) => {
  const [ sortBy, setSortBy ] = useState('Score');

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  }

  return <div className="playersList">
    <div className="playersList__header">
      <div className="playersList__header-name">Player's name</div>
      <select
      className="playersList__header-select"
        name="Sort by"
        value={sortBy}
        onChange={handleSortChange}
      >
        <option value="Score" selected>Score</option>
        <option value="Name">Name</option>
      </select>
    </div>
    {(sortBy === 'Score' ? players.sort((a, b) => b.score - a.score)
    : players.sort((a, b) => a.name.localeCompare(b.name)))
      .map(player => {
        return (
          <div key={player.name} className="playersList__Player">
            <div className="playersList__Player-ava-name">
              <img
                className="playersList__Player-avatar"
                src={player.avatar}
                alt="player's avatar"
              />
              <div className="playersList__Player-name">{player.name}</div>
            </div>
            <div className="playersList__Player-score">{player.score}</div>
          </div>
        )
      })
    }
  </div>
}
