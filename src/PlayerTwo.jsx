import React from 'react'


const Button ={
    float:"right",
    borderRadius: "4px",
    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.08)",
    color: "#fff",
    display:"block",
    width:"200px",
    textAlign: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "14px",
    padding: "16px 16px",
    margin: "20px auto 20px auto",
    textDecoration: "none",
    textShadow: "0 1px 1px rgba(0, 0, 0, 0.075)",
    transition: "background-color 0.1s linear",
    backgroundColor: "rgb( 43, 153, 91 )",
    border: "1px solid rgb( 33, 126, 74 )",
}

class PlayerOne extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            playedTimes: 0
         };
         this.onClick= this.onClick.bind(this);
    }

    onClick()
    {
         this.setState(state => ({
            playedTimes: state.playedTimes + 1,

         }));
        this.props.Click(this.props.name);
    }
    render(){
    return(
    <div >
       <h2>Player Two</h2>
       <h3>Name: {this.props.name}</h3>
       <h3>Played Number of Times: {this.state.playedTimes}</h3>
       <button style={Button} onClick={() => {this.onClick();}}
       disabled={this.props.playing ? "disable" : ""}>{this.props.playing ? "The user is playing now" : "Play"}
       </button>
    </div>
    );
    }
}

export default PlayerOne