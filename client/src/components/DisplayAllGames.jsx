import React, { useState, useEffect } from 'react';
import axios from 'axios';


const DisplayAllGames = () => { //Passing {games, setGames } through props when accessing state is needed with multiple components.
    const [games, setGames] = useState([]); //Used when only needing access within Display All, will store an array of Games

    useEffect(() => {
        axios.get('http://localhost:8000/api/findAllGames')
            .then((res) => {
                console.log(res);
                setGames(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []) //[] at end runs the effect only once, when the component is loaded. Having them missing is bad for API calls. 

    return (
        <div>
            <h2>All Games</h2>
            <br/>
            {
                games.map((game) => (
                    <h3 key={game._id}>{game.name}</h3>
                ))
            }
        </div>
    );
}

export default DisplayAllGames;