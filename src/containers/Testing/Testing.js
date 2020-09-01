import React, { Component } from 'react'
import ActiveTesting from '../../components/ActiveTesting/ActiveTesting'
import classes from './Testing.module.css'

class Testing extends Component {
    state = {
        activeQuestion: 0,
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
        console.log('Answer id', answerId)

        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render() {
        return (
            <div className={classes.Testing}>
                <div className={classes.TestingWrapper}>
                    <h1>Пройдите тест</h1>
                    <ActiveTesting
                        answers={this.state.testing[this.state.activeQuestion].answers}
                        question={this.state.testing[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        testingLength={this.state.testing.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}

export default Testing