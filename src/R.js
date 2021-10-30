import React, { Component } from 'react'

export default class R extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"munna"
        }
    }
    
    render() {
        setTimeout(()=>{
            this.setState({name:"munna bhayya"})
        },1000)
        return (
            <div>
                <h1>
                    {this.state.name}
                </h1>
            </div>
        )
    }
}
