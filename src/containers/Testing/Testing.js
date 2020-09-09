import React, { Component } from 'react'
import ActiveTesting from '../../components/ActiveTesting/ActiveTesting'
import FinishedTesting from '../../components/FinishedTesting/FinishedTesting'
import classes from './Testing.module.css'
import axios from '../../axios/axios-testing'
import Loader from '../../components/UI/Loader/Loader'

class Testing extends Component {
    state = {
        results: {}, // Начальное состояние фона для ответа { [id: 'success' 'error'] }
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // Начальное состояние фона для ответа { [id: 'success' 'error'] }
        testing: [],
        loading: true
    }

    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.testing[this.state.activeQuestion]
        const results = this.state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState({
                answerState: { [answerId]: 'success' },
                results
            })
            const timeout = window.setTimeout(() => {
                if (this.isTestingFiniched()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: { [answerId]: 'error' },
                results
            })
        }
    }

    isTestingFiniched() {
        return this.state.activeQuestion + 1 === this.state.testing.length
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    async componentDidMount() {
        try {
            const response = await axios.get(`/testinges/${this.props.match.params.id}.json`)
            const testing = response.data

            this.setState({
                testing,
                loading: false
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className={classes.Testing}>
                <div className={classes.TestingWrapper}>
                    <h1>Пройдите тест</h1>

                    {
                        this.state.loading ?
                            <Loader /> :
                            this.state.isFinished
                                ? <FinishedTesting
                                    results={this.state.results}
                                    testing={this.state.testing}
                                    onRetry={this.retryHandler}
                                />
                                : <ActiveTesting
                                    answers={this.state.testing[this.state.activeQuestion].answers}
                                    question={this.state.testing[this.state.activeQuestion].question}
                                    onAnswerClick={this.onAnswerClickHandler}
                                    testingLength={this.state.testing.length}
                                    answerNumber={this.state.activeQuestion + 1}
                                    state={this.state.answerState}
                                />
                    }

                </div>
            </div>
        )
    }
}

export default Testing