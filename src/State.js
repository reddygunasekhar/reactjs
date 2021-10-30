import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)
    
        this.State = {
            name:"munnabhayya" 
        }
    }
    
    render() {
        return (
            <div>
              <h1>
                  {this.State.name}</h1>  
            </div>
        )
    }
}
