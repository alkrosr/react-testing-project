import React, { Component } from 'react'
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

class Auth extends Component {
    state = {
        formControls: {
            email:{
                value: '',
                type: 'email',
                label: 'E-mail',
                errorMessage: 'Введите коректный E-mail => post@yandex.ru',
                valid: false,
                touched: false,
                validation: {
                    reguired: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Введите коректный Password',
                valid: false,
                touched: false,
                validation: {
                    reguired: true,
                    minLength: 6
                }
            }
        }
    }


    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = (event) => {
        event.preventDefault()
    }

    onChangeHandler = (event, controlName) => {

    }

    renderInputs() {
        const inputs = Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={(event) => {
                        this.onChangeHandler(event, controlName)
                    }}
                />
            )
        })

        return inputs
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>

                        {this.renderInputs()}

                        <Button
                            type='success'
                            onClick={this.loginHandler}
                        >
                            Войти
                        </Button>

                        <Button
                            type='primary'
                            onClick={this.registerHandler}
                        >
                            Зарегистрироваться
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth