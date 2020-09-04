import React from 'react'
import classes from './MenuToggle.module.css'

const MenuToggle = props => {
    const cls = [
        classes.MenuToggle,
        classes.burger
    ]

    if (props.isOpen) {
        cls.push(classes.red)
        cls.push(classes.open)
    } else {
        cls.push(classes.white)
    }

    return (
        <i
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle