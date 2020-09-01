import React, { Component } from 'react'
import ActiveTesting from '../../components/ActiveTesting/ActiveTesting'
import classes from './Testing.module.css'

class Testing extends Component {
    state = {
        testing: []
    }

    render() {
        return (
            <div className={classes.Testing}>
                <div className={classes.TestingWrapper}>
                    <h1>Testing</h1>
                    <ActiveTesting />
                </div>
            </div>
        )
    }
}

export default Testing