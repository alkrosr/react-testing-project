import React, { Component } from 'react'
import classes from './Testing.module.css'

class Testing extends Component {
    state = {
        testing: []
    }

    render() {
        return (
            <div className={classes.Testing}>
                <h1>Testing</h1>
            </div>
        )
    }
}

export default Testing