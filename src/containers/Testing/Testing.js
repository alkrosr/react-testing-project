import React, { Component } from 'react'
import ActiveTesting from '../../components/ActiveTesting/ActiveTesting'
import FinishedTesting from '../../components/FinishedTesting/FinishedTesting'
import classes from './Testing.module.css'

class Testing extends Component {
    state = {
        results: {}, // Начальное состояние фона для ответа { [id: 'success' 'error'] }
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // Начальное состояние фона для ответа { [id: 'success' 'error'] }
        testing: [
            {
                question: 'Сколько будет 2 + 2 ?',
                correctAnswer: 4, // Правльный ответ (id)
                id: 1,
                answers: [
                    { text: '1', id: 1 },
                    { text: '2', id: 2 },
                    { text: '3', id: 3 },
                    { text: '4', id: 4 },
                ]
            },
            {
                question: 'Сколько будет 2 * 2 ?',
                correctAnswer: 4, // Правльный ответ (id)
                id: 2,
                answers: [
                    { text: '1', id: 1 },
                    { text: '2', id: 2 },
                    { text: '3', id: 3 },
                    { text: '4', id: 4 },
                ]
            }
        ]
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

        if (question.correctAnswer === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState({
                answerState: { [answerId]: 'success' },
                results: results
            })
            const timeout = window.setTimeout(() => {
                if (this.isTesting()) {
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
                answerState: { [question.id]: 'error' },
                results: results
            })
        }
    }

    isTesting() {
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

    render() {
        return (
            <div className={classes.Testing}>
                <div className={classes.TestingWrapper}>
                    <h1>Пройдите тест</h1>
                    {
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