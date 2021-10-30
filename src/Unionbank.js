import React from 'react'
import Andhrabank from './Andhrabank'
import Corporationbank from './Corporationbank'

export default function Unionbank() {
    let data={
        firstname:'yash',
        lastname:'888'
    }
    return (
        <div>
           <Andhrabank info={data}/>
           <Corporationbank info={data}/> 
        </div>
    )
}

