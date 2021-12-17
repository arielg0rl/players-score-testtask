import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { IPlayer } from '../types';

export interface Props {
  players: IPlayer[];
  onSelect: (playerFromEvent: IPlayer) => void;
}

export const PlayersList: React.FC<Props> = function ({ onSelect, players }) {
  const [sortBy, setSortBy] = useState<string>('Score');
  const [scoreLeader, setScoreLeader] = useState<IPlayer>();
  const [addNewLeaderStyle, setAddNewLeaderStyle] = useState<boolean>(false);

  useEffect(() => {
    const newBoard = players.sort((player1, player2) => player2.score - player1.score);
    if (newBoard[0].name === scoreLeader?.name) {
      return;
    }

    setScoreLeader(newBoard[0]);
  }, [players]);

  useEffect(() => {
    setAddNewLeaderStyle(true);

    setTimeout(() => {
      setAddNewLeaderStyle(false);
    }, 1000);
  }, [scoreLeader]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="playersList">
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
        .map((player, i) => (
          <Link style={{ textDecoration: 'none' }} to={`/player/${player.name.split(' ').join('_')}`}>
            <div
              onClick={(): void => {
                onSelect(player);
              }}
              key={player.name}
              className={classNames(
                'playersList__Player',
                { 'playersList__Player--highlighted': (addNewLeaderStyle && i === 0) },
                { 'playersList__Player--highlighted--first': (players.length === 1) },
              )}
            >
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
          </Link>
        ))}
    </div>
  );
};
