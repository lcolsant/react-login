import React, { Component } from 'react';
import './FormValidator.css';



// const initialState = {
//     name: "",
//     email: "",
//     password: "",
//   };

  class FormValidator extends Component{
    
    
    
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            nameError: "",
            emailError: "",
            passwordError: "",
            isValid: false,
        }
        
        this.initialState = this.state;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }
    
    
    handleSubmit(event){
        event.preventDefault();
        // const isValid = this.validate();
        if(this.state.isValid){

            console.log(this.state);
            this.setState(this.initialState)
        }else{
            console.log('invalid input')
        }
        
    }

    handleChange(event){
        console.log(event.target.value)
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    validate(event){
        
        let nameValid = false;
        let emailValid = false;
        let passwordValid = false;
        
        if(this.state.name){
            nameValid = true;
        }
        
        if(this.state.email.includes("@")){
            emailValid = true;
        }
        
        if(this.state.password.length>3){
            passwordValid = true;
        }
        console.log(event.target.name);

        switch(event.target.name){

            case 'name':
                if(nameValid){
                    this.setState({nameError:''});
                    console.log('in nameValidator+')
                    break;
                }else{
                    this.setState({nameError:'You must enter a name'});
                    console.log('in nameValidator-')
                    break;
                }
            case 'email':
                if(emailValid){
                    this.setState({emailError:''});
                    console.log('in emailValidator+')
                    break;
                }else{
                    this.setState({emailError:'Please enter a valid email'});
                    console.log('in emailValidator-')
                    break;
                }

            case 'password':
                if(passwordValid){
                    this.setState({passwordError:''})
                    console.log('in passwordValidator+')
                    break;
                }else{
                    this.setState({passwordError:'Password must be longer than 3 characters'});
                    console.log('in passwordValidator-')
                    break;
                }
        }


        if(nameValid && emailValid && passwordValid){
            this.state.isValid = true;
        }else{
            this.state.isValid = false;
        }

        return this.state.isValid;
        
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                <div>
                    <input
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        onBlur={this.validate}
                    />
                </div>
                <div className='errorMsg'>{this.state.nameError}</div>
                <div> 
                    <input
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        onBlur={this.validate}

                    />
                </div>
                <div className='errorMsg'>{this.state.emailError}</div>
                <div>
                    <input
                        name="password"
                        placeholder="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        onBlur={this.validate}

                    />
                </div>
                <div className='errorMsg'>{this.state.passwordError}</div>
                <div>
                    <input
                        type="submit"
                        value="submit"
                        disabled={!this.state.isValid}
                    />
                </div>

            </form>
        );
    }
}

export default FormValidator