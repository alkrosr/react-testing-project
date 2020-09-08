import React, { Component } from 'react'
import classes from './TestingList.module.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

class TestingList extends Component {
    renderTesting() {
        return [1, 2, 3].map((testing, index) => {
            return (
                <li key={index}>
                    <NavLink to={'/testing/' + testing}>
                        Test number {testing}
                    </NavLink>
                </li>
            )
        })
    }

    componentDidMount() {
        axios.get('https://react-testing-d6141.firebaseio.com/testing.json').then(response => {
            console.log(response)
        })
    }

    render() {
        return (
            <div className={classes.TestingList}>
                <div>
                    <h1>Список тестов</h1>

                    <ul>
                        {this.renderTesting()}  
                    </ul>
                </div>
            </div>
        )
    }
}

export default TestingList