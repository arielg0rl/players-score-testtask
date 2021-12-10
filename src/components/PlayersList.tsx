import React, { useEffect, useState } from "react"
import { IPlayer } from "../types"
import { Link } from 'react-router-dom';
import classNames from "classnames";
import Description from "./Description";
import Modal from 'react-modal';

export interface Props {
  players: IPlayer[];
}

export const PlayersList: React.FC<Props> = ({ players }) => {
  const [ sortBy, setSortBy ] = useState<string>('Score');
  const [ scoreLeader, setScoreLeader ] = useState<IPlayer>();
  const [ addNewLeaderStyle, setAddNewLeaderStyle ] = useState<boolean>(false);
  const [ showModal, setShowModal ] = useState(false);
  const [ clickedPlayer, setClickedPlayer ] = useState<IPlayer>();

  useEffect(() => {
    const newBoard = players.sort((player1, player2) => player1.score - player2.score);
    if (newBoard[0].name === scoreLeader?.name) {
      return;
    }

    setScoreLeader(newBoard[0]);
  }, [players])

  useEffect(() => {
    setAddNewLeaderStyle(true);

    setTimeout(() => {
      setAddNewLeaderStyle(false);
    }, 1000)

  }, [scoreLeader]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  }

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
        .map((player, i) => {
          return (
            <Link style={{ textDecoration: 'none' }} to={`/player/${player.name}`}>
              <div
                onClick={(): void => {
                  setShowModal(true)
                  setClickedPlayer(player)
                }}
                key={player.name}
                className={classNames('playersList__Player', {'playersList__Player--highlighted': (addNewLeaderStyle && i === 0)})}
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
          )
        })
      }
      {showModal &&
      <Modal>
        <Description player={clickedPlayer ? clickedPlayer : null} />
      </Modal>
      }
    </div>
  )
}
