import React, { useState } from 'react';
import DisplayAllGames from '../components/DisplayAllGames';

const Home = (props) => {
    return (
        <div>
            <h1>Welcome to the Homepage</h1>
            <h2>Please Select Your Game</h2>
            <br/>
            <DisplayAllGames/>
        </div>
    );
}

export default Home;