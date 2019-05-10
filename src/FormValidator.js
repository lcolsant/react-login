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
        }
        
        this.initialState = this.state;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }
    
    
    handleSubmit(event){
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){

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

    validate(){
        let isValid = true;
        
        if(!this.state.name){
            isValid = false;
            this.setState({nameError:'You must enter a name'});
        }else if(!this.state.email.includes("@")){
            isValid = false;
            this.setState({emailError:'Please enter a valid email'});
        }else if(this.state.password.length<3){
            isValid = false;
            this.setState({passwordError:'Password must be longer than 3 characters'});

        }

        return isValid;
        
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
                    />
                </div>
                <div className='errorMsg'>{this.state.passwordError}</div>
                <div>
                    <input
                        type="submit"
                        value="submit"
                    />
                </div>

            </form>
        );
    }
}

export default FormValidator