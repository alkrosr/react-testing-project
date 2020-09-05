import React from 'react'
import Button from '../UI/Button/Button'
import classes from './FinishedTesting.module.css'
import { Link } from 'react-router-dom'

const FinishedTesting = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }

        return total
    }, 0)

    return (
        <div className={classes.FinishedTesting}>

            <ul>
                {props.testing.map((testinItem, index) => {
                    const cls = [
                        'fa',
                        props.results[testinItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[testinItem.id]]
                    ]
                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {testinItem.question}
                            <i className={cls.join(' ')} />
                        </li>
                    )
                })}
            </ul>

            <p>Правильно {successCount} из {props.testing.length}</p>

            <div>
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
                <Link to={'/'}>
                    <Button type="success">Перейти в список тестов</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedTesting;