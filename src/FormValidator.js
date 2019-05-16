import React, { Component } from 'react';
import './FormValidator.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

const emailRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  class FormValidator extends Component{
    
    
    
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            formErrors: {
                nameError:'',
                emailError:'',
                passwordError:'',
            },
            // isValid: false,
        }
        
        this.initialState = this.state;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }
    
    
    handleSubmit(event){
        event.preventDefault();
        const isValid = this.validate(this.state);
        if(isValid){

            console.log(this.state);
            this.setState(this.initialState)
        }else{
            console.log('invalid input')
        }
        
    }

    handleChange(e){
        const {name, value} = e.target

        let formErrors = {...this.state.formErrors}
        
        console.log(name);
        console.log(value)

        switch(name){

            case 'name':
                if(value){
                    formErrors.nameError = ''
                    console.log('in nameValidator+')
                    break;
                }else{
                    formErrors.nameError = 'You must enter a name'
                    console.log('in nameValidator-')
                    break;
                }
            case 'email':
                if(emailRegex.test(value)){
                    formErrors.emailError = '';
                    console.log('in emailValidator+')
                    break;
                }else{
                    formErrors.emailError = 'Please enter a valid email'; 
                    console.log('in emailValidator-')
                    break;
                }

            case 'password':
                console.log(`password length: ${value.length}`)
                if(value.length>3){
                    formErrors.passwordError = '';
                    console.log('in passwordValidator+')
                    break;
                }else{
                    formErrors.passwordError = 'Password must be longer than 3 characters';
                    console.log('in passwordValidator-')
                    break;
                }
            default:
                break;
        }

        
        this.setState({
            [name]:value,
            formErrors,
        }, console.log(this.state));


    }



    validate({ formErrors, ...rest }){


        let valid = true;

        Object.values(formErrors).forEach(val => {
          val.length > 0 && (valid = false);
        });
      
        Object.values(rest).forEach(val => {
          val === '' && (valid = false);
        });
      
        return valid;

    }

    render(){

        const {formErrors} = this.state

        return(
            <Container className="wrapper" fluid={true}>
                <Container className="formContainer">
                    <Row>
                        <Col>
                            <form className="m-4" onSubmit={this.handleSubmit} noValidate >
                                <div >
                                    {/* <label htmlFor="Name">Name: </label> */}
                                    <input
                                        className={formErrors.nameError.length > 0 ? "error" : null}
                                        type="text"
                                        name="name"
                                        placeholder="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className='errorMsg'>{this.state.formErrors.nameError}</div>
                                <div> 
                                    {/* <label htmlFor="Email">Email: </label> */}
                                    <input
                                        className={formErrors.emailError.length > 0 ? "error" : null}
                                        type="text"
                                        name="email"
                                        placeholder="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}

                                    />
                                </div>
                                <div className='errorMsg'>{this.state.formErrors.emailError}</div>
                                <div>
                                    {/* <label htmlFor="Password">Password: </label> */}
                                    <input
                                        className={formErrors.passwordError.length > 0 ? "error" : null}
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}

                                    />
                                </div>
                                <div className='errorMsg'>{this.state.formErrors.passwordError}</div>
                                <div>
                                    <Button className='btnSubmit' type="submit">Submit</Button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default FormValidator