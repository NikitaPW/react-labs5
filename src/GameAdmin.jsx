import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

const Input ={
    display:"inline-block",
    marginRight: "20px",
};

const InputFields = {
    margin: "0 auto 20px auto",
    width: "90vw",
    position:"relative",
    borderTop: "1px solid black"

}

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

class GameAdmin extends React.Component{
    render(){
    return(
    <div >
     <div>
        <div style={PlayerBox}><PlayerOne /></div>
        <div style={PlayerBox}><PlayerTwo /></div>

     </div>
     <div style={InputFields}>
        <div><h4 style={Input}>Set Name of Player One: </h4><input style={Input}></input></div>
        <div><h4 style={Input}>Set Name of Player Two: </h4><input style={Input}></input></div>
    </div>
    </div>
    );
    }
}

export default GameAdmin