import React from 'react';

class SelfDestructTimerComponent extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {count:3};
    }
    changeDigitInCounter = () => {
        this.setState({count: this.state.count-1});
    
    if (this.state.count===0){
        document.body.style.backgroundColor = "red";
        clearInterval(this.intervalID);
        }
    } 

    componentDidMount = ()=>{
        this.intervalID = setInterval(this.changeDigitInCounter, 1000);

    }
    render = () =>{
        return (
            <div>{this.state.count}</div>
        )
    }
}

export var SelfDestruct = SelfDestructTimerComponent;
export default SelfDestructTimerComponent;