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
constructor(props) {
    super(props);
    this.state = {
      firstPlayer: "Player One",
      secondPlayer: "Player Two",
    };
  }

    render(){
    return(
    <div >
     <div>
        <div style={PlayerBox}><PlayerOne name={this.state.firstPlayer}/></div>
        <div style={PlayerBox}><PlayerTwo name={this.state.secondPlayer}/></div>

     </div>
     <div style={InputFields}>
        <div><h4 style={Input}>Set Name of Player One: </h4><input style={Input} value={this.state.firstPlayer} type="text" onChange={onChangeEvent => this.setState({ firstPlayer: onChangeEvent.target.value })}></input></div>
        <div><h4 style={Input}>Set Name of Player Two: </h4><input style={Input} value={this.state.secondPlayer} type="text" onChange={onChangeEvent => this.setState({ secondPlayer: onChangeEvent.target.value })}></input></div>
    </div>
    </div>
    );
    }
}

export default GameAdmin