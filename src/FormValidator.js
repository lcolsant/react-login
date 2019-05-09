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
        }
        
        this.initialState = this.state;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    handleSubmit(event){
        event.preventDefault();
        console.log('form submitted!');
        this.setState(this.initialState)
  
        
    }

    handleChange(event){
        console.log(event.target.value)
        this.setState({
            [event.target.name]:event.target.value
        });
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
                    />
                </div>
                <div> 
                    <input
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input
                        name="password"
                        placeholder="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>
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