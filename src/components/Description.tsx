import React, { } from "react";
import ReactDom from 'react-dom';
// import { Link } from 'react-router-dom';
import { IPlayer } from "../types";

export interface Props {
  player: IPlayer;
}

export const Description: React.FC<Props> = ({ player }) => {
  return ReactDom.createPortal(
    <div>
      <div className="description">
        <div>{player.name}</div>
        <div>{player.avatar}</div>
        <div>{player.score}</div>
      </div>
    </div>,
    document.getElementById("portal")!
  )
}

export default Description

// Link to={`/player/${player.name}`}