import React, { useState, useEffect } from 'react';
import Description from './components/Description';

import './App.scss';

import { Empty } from './components/Empty';
import { PlayersList } from './components/PlayersList';
import { IPlayer } from './types';
import { Route, Routes } from 'react-router';


export const App: React.FC = () => {
  const [ players, setPlayers ] = useState<IPlayer[]>([]);
  const [ selectedPlayer, setSelectedPlayer ] = useState<IPlayer>()

  useEffect(() => {
    const item = window.localStorage.getItem('players');
    setPlayers((prev: IPlayer[]) => JSON.parse(item ? item : JSON.stringify(prev)));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('players', JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:5000');

    eventSource.onmessage = function(event) {
      setPlayers((prev: IPlayer[]) => [...prev, JSON.parse(event.data)]);
    }
  }, [])

  const choosePlayer = (playerFromEvent: IPlayer): void => {
    setSelectedPlayer(playerFromEvent);
  }

  return (
    <div className="wrapper">
      <div className="App">
        <div className="container">
          <h1 className="App__h1">Score board</h1>
          {
            !players.length
            ?
            <Empty />
            :
            <PlayersList onSelect={choosePlayer} players={players}/>
          }
          {selectedPlayer && (
          <Routes>
            <Route
              path={`/player/${selectedPlayer.name}`}
              element={(<Description player={selectedPlayer as IPlayer} />)}
            />
          </Routes>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;
