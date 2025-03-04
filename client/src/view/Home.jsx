import React, { useState } from 'react';
import DisplayAllGames from '../components/DisplayAllGames';
import CreateGame from '../components/CreateGame';

const Home = () => {
    const [games, setGames] = useState([]); //shared state

    return (
        <div>
            <h1>Welcome to the Homepage</h1>
            <h2>Please Select Your Game</h2>
            <br/>
            <DisplayAllGames games={games} setGames={setGames} />
            <CreateGame games={games} setGames={setGames} />
        </div>
    );
}

export default Home;