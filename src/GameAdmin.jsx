import React from 'react'

const Input ={
    display:"inline-block",
    marginRight: "20px",
};


class Inputs extends React.Component{
    render(){
    return(
    <div >
        <div><h4 style={Input}>Set Name of Player One: </h4><input style={Input}></input></div>
        <div><h4 style={Input}>Set Name of Player Two: </h4><input style={Input}></input></div>
    </div>
    );
    }
}

export default Inputs