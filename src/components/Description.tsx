import React, { } from "react";
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import { IPlayer } from "../types";

export interface Props {
  player: IPlayer | null;
}

export const Description: React.FC<Props> = ({ player }) => {
  return ReactDom.createPortal(
    player &&
    <Link to={player ? `/player/${player.name}` : '/'}>
      <div className="description">
        <div>{player.name}</div>
        <div>{player.avatar}</div>
        <div>{player.score}</div>
      </div>
    </Link>,
    document.getElementById("portal")!
  )
}

export default Description