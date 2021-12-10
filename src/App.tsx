import React, { useState, useEffect } from 'react';

import './App.scss';

import { Empty } from './components/Empty';
import { PlayersList } from './components/PlayersList';
import { IPlayer } from './types';

export const App: React.FC = () => {
  const [ players, setPlayers ] = useState<IPlayer[]>([]);
  console.log(players.length);

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
            <PlayersList players={players}/>
          }
        </div>
      </div>
    </div>
  )
}

export default App;
