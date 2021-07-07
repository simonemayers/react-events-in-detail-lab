// Code CoordinatesButton Component Here
import React, {Component} from 'react'


export default class CoordinatesButton extends Component{
    handler = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    render(){
        return(
            <button onClick={this.handler}></button>
        )
    }
}