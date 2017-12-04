import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SelfDestructTimerComponent extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {count:42};
    }
    changeDigitInCounter (){
        if (this.state.count>0){
            document
            .getElementsByClassName("counter")
            .innerHTML=this.setState({count: this.setState.count-1});
        }
    }
    componentWillMount(){
        var intervalID = setInterval(changeDigitInCounter, 1000);
    }
    render(){
        return (
            <div className='counter'>{}</div>
        )
    }
}

export var SelfDestruct = SelfDestructTimerComponent;
export default SelfDestructTimerComponent;