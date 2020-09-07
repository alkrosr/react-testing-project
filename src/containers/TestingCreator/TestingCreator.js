import React, { Component } from 'react'
import classes from './TestingCreator.module.css'
import Button from '../../components/UI/Button/Button'

class TestingCreator extends Component {
    submitHandler = event => {
        event.preventDefault()
    }

    addQuestionHandler = () => {

    }

    createTestingHandler = () => {

    }

    render() {
        return (
            <div className={classes.TestingCreator}>
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.submitHandler}>

                        <input type='text' />
                        <hr />
                        <input type='text' />
                        <input type='text' />
                        <input type='text' />
                        <input type='text' />


                        <select></select>

                        <Button
                            type='primary'
                            onClick={this.addQuestionHandler}
                        >
                            Добавить вопрос
                        </Button>
                        <Button
                            type='success'
                            onClick={this.createTestingHandler}
                        >
                            Создать тест
                        </Button>

                    </form>
                </div>
            </div>
        )
    }
}

export default TestingCreator