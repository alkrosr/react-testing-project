import React, { Component } from 'react'
import ActiveTesting from '../../components/ActiveTesting/ActiveTesting'
import classes from './Testing.module.css'

class Testing extends Component {
    state = {
        testing: [
            {   
                question: 'Сколько будет 2 + 2 ?',
                correctAnswer: 4, // Правльный ответ (id)
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
    }

    render() {
        return (
            <div className={classes.Testing}>
                <div className={classes.TestingWrapper}>
                    <h1>Пройдите тест</h1>
                    <ActiveTesting
                        answers={this.state.testing[0].answers}
                        question={this.state.testing[0].question}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        )
    }
}

export default Testing