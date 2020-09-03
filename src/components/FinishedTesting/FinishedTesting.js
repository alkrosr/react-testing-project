import React from 'react'
import classes from './FinishedTesting.module.css'

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
                <button onClick={props.onRetry}>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedTesting;