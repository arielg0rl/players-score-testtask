import React, { } from "react";
import ReactDom from 'react-dom';
import { IPlayer } from "../types";
import { useNavigate } from "react-router-dom";

export interface Props {
  player: IPlayer;
  onClose: () => void;
}

export const Description: React.FC<Props> = ({ onClose, player }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
    onClose();
  }

  return ReactDom.createPortal(
    <>
      <div
        style={{ position: 'absolute', top: '0', width: '100vw', height: '100vh' }}
        onKeyPress={() => handleClose()}
        onClick={() => handleClose()}
      >
      </div>
      <div className="wrapper">
        <div>
          <div className="description">
            <div className="description__player-wrapper">
              <img
                className="description__avatar"
                src={player.avatar}
                alt="player's avatar"
                />
              <div className="description__name">{player.name}</div>
              <div className="description__score">Score: {player.score}</div>
              <div className="description__bio">{player.bio}</div>
            </div>
            <button
              className="description__button"
              onKeyPress={() => handleClose()}
              onClick={() => handleClose()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
,
    document.getElementById("portal")!
  )
}

export default Description

// Link to={`/player/${player.name}`}