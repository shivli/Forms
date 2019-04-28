import React, { Component } from 'react';
import { FormErrors } from '../FormErrors'


/* Import Components */
import Input from './formFields/input';
import Button from './formFields/Button'

//Form for login
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SignUp: false,
      SignIn: true,
      formErrors: { name: '', email: '', password: '', phone: '' },
      name: '',
      email: '',
      password: '',
      phone: '',
      nameValid: false,
      emailValid: false,
      passwordValid: false,
      phoneValid: false,
      formValid: false

    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let nameValid = this.state.passwordValid;
    let phoneValid = this.state.phoneValid

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >=8 && value.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8}$/);

        fieldValidationErrors.password = passwordValid ? '' : 'is Weak';
        break;
      case 'name':
        nameValid = value.match(/^[a-zA-Z]+$/);;
        fieldValidationErrors.name = nameValid ? '' : ' is too short';
        break;
      case 'phone':
        phoneValid = value.length === 10 && value.match(/^[0-9]+$/);;
        fieldValidationErrors.phone = phoneValid ? '' : ' Enter a Valid Phone no.';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid,
      nameValid: nameValid,
      phoneValid: phoneValid
    }, this.validateForm);
  }
  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid && this.state.nameValid && this.state.phoneValid });

  }

  SignIn = () => {
    this.setState({
      SignUp: false,
      SignIn: true,
      email:'',
      password:'',
      name:'',
      phone:'',
      formErrors: { name: '', email: '', password: '', phone: '' }



    })
  }
  SignUp = () => {
    this.setState({
      SignUp: true,
      SignIn: false,
      email:'',
      password:'',
      name:'',
      phone:'',
      formErrors: { name: '', email: '', password: '', phone: '' }
    })
  }

  render() {
    return (

      <div>
        <button onClick={this.SignIn}> SignIn</button>
        <button onClick={this.SignUp}>signup</button>

        {
          this.state.SignIn &&
          <form className="SigninForm" onSubmit={this.handleFormSubmit}>
            <div className="default">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <div className="signinformComponents">

              <Input inputType={'text'}
                title={' email'}
                name={"email"}
                value={this.state.email}
                placeholder={'Enter your email'}
                handleChange={this.handleInput}

              /> {/* email of the user */}
              
              <Input inputType={'password'}
                title={' password'}
                name={"password"}
                value={this.state.password}
                placeholder={'Enter your password'}
                handleChange={this.handleInput}
              />{/* Password of the user */}

              <Button
                action={this.handleFormSubmit}
                type={'primary'}
                title={'Submit'}
              /> { /*Submit */}
            </div>


          </form>

        }
        {
          this.state.SignUp && <form className="SignupForm" onSubmit={this.handleFormSubmit}>
            <div className="default" >
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <div className="signupformComponents">
              <Input inputType={'text'}
                title={' Name'}
                name={"name"}
                value={this.state.name}
                placeholder={'Enter your name'}
                handleChange={this.handleInput}

              /> {/* Name of the user */}
              <Input inputType={'text'}
                title={' email'}
                name={"email"}
                value={this.state.email}
                placeholder={'Enter your email'}
                handleChange={this.handleInput}

              /> {/* email of the user */}
              <Input inputType={'password'}
                title={' password'}
                name={"password"}
                value={this.state.password}
                placeholder={'Enter your password'}
                handleChange={this.handleInput}

              /> {/* password of the user */}
              <  Input inputType={'text'}
                title={' phone'}
                name={"phone"}
                value={this.state.phone}
                placeholder={'Enter your phoneNo'}
                handleChange={this.handleInput}

              />
              <Button
                action={this.handleFormSubmit}
                type={'primary'}
                title={'Submit'}
              /> { /*Submit */}
            </div>

          </form>
        }
      </div>
    );
  }

}


export { SignIn };
