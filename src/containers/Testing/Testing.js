import React, { Component } from 'react'
import ActiveTesting from '../../components/ActiveTesting/ActiveTesting'
import classes from './Testing.module.css'

class Testing extends Component {
    state = {
        testing: [
            {
                answers: [
                    {text: 'Ответ 1'},
                    {text: 'Ответ 2'},
                    {text: 'Ответ 3'},
                    {text: 'Ответ 4'},
                ]
            }
        ]
    }

    render() {
        return (
            <div className={classes.Testing}>
                <div className={classes.TestingWrapper}>
                    <h1>Пройдите тест</h1>
                    <ActiveTesting answers={this.state.testing[0].answers} />
                </div>
            </div>
        )
    }
}

export default Testing