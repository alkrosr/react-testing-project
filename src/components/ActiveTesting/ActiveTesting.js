import React from 'react'
import classes from './ActiveTesting.module.css'

const ActiveTesting = props => {
    return (
        <div className={classes.ActiveTesting}>
            <p className={classes.Question}>
                <span>
                    <strong>1.</strong>&nbsp;
                    Кто тако веб разработчик?
                </span>
                <small>4 из 12</small>
            </p>

            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    )
}

export default ActiveTesting;
