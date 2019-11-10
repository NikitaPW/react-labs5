import React from 'react'
import GameAdmin from './GameAdmin'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

const Inputs ={
     width: "90vw",
     paddingTop:"20px",
     margin: "20px auto 20px auto",
     borderTop: "1px solid black"
};

const PlayerBox = {
    backgroundColor: "yellow",
    border: "1px solid black",
    padding: "10px",
    margin: "0 auto 20px auto",
    color: "blue",
    width: "90vw",
    height:"30vh",
    position:"relative",
};

const App = () => (
    <div>
    <div style={PlayerBox}><PlayerOne /></div>
    <div style={PlayerBox}><PlayerTwo /></div>
    <div style={Inputs}><GameAdmin /></div>
    </div>

)

export default App