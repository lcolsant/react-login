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
            formErrors: {
                nameError:'',
                emailError:'',
                passwordError:'',
            },
            // nameError: "",
            // emailError: "",
            // passwordError: "",
            isValid: false,
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

        this.setState({
            [name]:value,
        });
        

        let formErrors = {...this.state.formErrors}
        
        console.log(value)
        console.log(value.length)

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
        console.log(name);


        switch(name){

            case 'name':
                if(nameValid){
                    // this.setState({nameError:''});
                    formErrors.nameError = ''
                    console.log('in nameValidator+')
                    break;
                }else{
                    // this.setState({nameError:'You must enter a name'});
                    formErrors.nameError = 'You must enter a name'
                    console.log('in nameValidator-')
                    break;
                }
            case 'email':
                if(emailValid){
                    // this.setState({emailError:''});
                    formErrors.emailError = '';
                    console.log('in emailValidator+')
                    break;
                }else{
                    // this.setState({emailError:'Please enter a valid email'});
                    formErrors.emailError = 'Please enter a valid email'; 
                    console.log('in emailValidator-')
                    break;
                }

            case 'password':
                if(passwordValid){
                    // this.setState({passwordError:''})
                    formErrors.passwordError = '';
                    console.log('in passwordValidator+')
                    break;
                }else{
                    // this.setState({passwordError:'Password must be longer than 3 characters'});
                    formErrors.passwordError = 'Password must be longer than 3 characters';
                    console.log('in passwordValidator-')
                    break;
                }
            default:
                break;
        }


        this.setState({
            formErrors,
        });

    }



    validate({ formErrors, ...rest }){


        let valid = true;

        // validate form errors being empty
        Object.values(formErrors).forEach(val => {
          val.length > 0 && (valid = false);
        });
      
        // validate the form was filled out
        Object.values(rest).forEach(val => {
          val === '' && (valid = false);
        });
      
        return valid;

        // if(nameValid && emailValid && passwordValid){
        //     this.state.isValid = true;
        // }else{
        //     this.state.isValid = false;
        // }

        // return this.state.isValid;
    }

    

    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                <div>
                    <label htmlFor="Name">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        // onBlur={this.validate}
                    />
                </div>
                <div className='errorMsg'>{this.state.formErrors.nameError}</div>
                <div> 
                    <label htmlFor="Email">Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        // onBlur={this.validate}

                    />
                </div>
                <div className='errorMsg'>{this.state.formErrors.emailError}</div>
                <div>
                    <label htmlFor="Password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        // onBlur={this.validate}

                    />
                </div>
                <div className='errorMsg'>{this.state.formErrors.passwordError}</div>
                <div>
                    <input
                        type="submit"
                        value="submit"
                        // disabled={!this.state.isValid}
                    />
                </div>

            </form>
        );
    }
}

export default FormValidator