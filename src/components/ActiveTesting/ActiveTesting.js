import React from 'react'
import AnswersList from '../../components/ActiveTesting/AnswersList/AnswersList'
import classes from './ActiveTesting.module.css'


const ActiveTesting = props => {
    return (
        <div className={classes.ActiveTesting}>
            <p className={classes.Question}>
                <span>
                    <strong>1.</strong>&nbsp;
                    {props.question}
                </span>
                <small>1 из 12</small>
            </p>

            <AnswersList 
                answers={props.answers} 
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    )
}

export default ActiveTesting;
