import React, {Component} from 'react'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import classes from './Layout.module.css'

class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            <div className={classes.Layout}>

            <MenuToggle 
                onToggle={this.toggleMenuHandler}
                isOpen={this.state}
            />

            <main>
                {this.props.children}
            </main>
        </div>
        )
    }
}

export default Layout;