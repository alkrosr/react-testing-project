import React, { Component } from 'react'
import classes from './TestingList.module.css'
import { NavLink } from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader'
import { connect } from 'react-redux'
import { fetchTestinges } from '../../store/actions/testing'

class TestingList extends Component {

    // state = {
    //     testinges: [],
    //     loading: true
    // }

    renderTestinges() {
        return this.props.testinges.map(testing => {
            return (
                <li key={testing.id}>
                    <NavLink to={'/testing/' + testing.id}>
                        {testing.name}
                    </NavLink>
                </li>
            )
        })
    }

    componentDidMount() {
        this.props.fetchTestinges()
        
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

                    {this.props.loading && this.props.testinges.length !== 0
                        ? <Loader />
                        : <ul>
                            {this.renderTestinges()}
                        </ul>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        testinges: state.testing.testinges,
        loading: state.testing.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTestinges: () => dispatch(fetchTestinges())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestingList)