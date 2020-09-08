import React, { Component } from 'react'
import classes from './TestingList.module.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

class TestingList extends Component {

    state = {
        testinges: []
    }


    renderTesting() {
        return this.state.testinges.map((testing) => {
            return (
                <li key={testing.id}>
                    <NavLink to={'/testing/' + testing.id}>
                        {testing.name}
                    </NavLink>
                </li>
            )
        })
    }

    async componentDidMount() {
        try {
            const response = await axios.get('https://react-testing-d6141.firebaseio.com/testinges.json')
            const testinges = []
            Object.keys(response.data).forEach((key, index) => {
                testinges.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            })

            this.setState({
                testinges
            })
        } catch (e) {
            console.log(e)
        }
    }

    // componentDidMount() {
    //     axios.get('https://react-testing-d6141.firebaseio.com/testing.json').then(response => {
    //         console.log(response)
    //     })
    // }

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