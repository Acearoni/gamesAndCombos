import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CreateGame = ({ games, setGames }) => {
    const [game, setGame] = useState({ name: "" })
    const [errors, setErrors] = useState("")

    const changeHandler = (e) => {
        setGame({ ...game, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/createGame', game)
            .then((res) => {
                console.log(res)
                setGames([...games, res.data])
                setGame({ name: "" })
                setErrors({})
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
            })
    }


    return (
        <div>
            <h1>Add New Game</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name:</label>
                    <input type='text' name='name' value={game.name} onChange={changeHandler} />
                    {errors.name ? <p>{errors.name.message}</p> : null}
                </div>
                <button>SUBMIT</button>
            </form>
        </div>
    );
}

export default CreateGame;