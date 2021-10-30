import React, { Component } from 'react'

export default class Corporationbank extends Component {
    render(props) {
        return (
            <div>
              Coropation Bank account for {this.props.info.lastname} 
            </div>
        )
    }
}
