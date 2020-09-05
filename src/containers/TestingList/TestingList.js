import React, { Component } from 'react'
import classes from './TestingList.module.css'
import { NavLink } from 'react-router-dom'

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