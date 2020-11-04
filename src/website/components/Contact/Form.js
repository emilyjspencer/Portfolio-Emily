import React, { Component } from 'react';
import axios from 'axios';

import './Form.css';


class Form extends Component {
    constructor(props)  {
        super(props);

        this.state = {
          firstname: '',
          lastname: '',
          email: '',
          message: '',
          sent: null,
          disabled: false
        }
    }   
    
    handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const firstname = target.firstname;

      this.setState({
          [firstname]: value
      })
  }

  handleSubmit(event) {

      event.preventDefault();
  

    axios.post('http://localhost:5000/backend/contact', this.state)
      .then(res => {
        if(res.data.success) {
          this.setState({
            sent: true,
            disabled: false

          });
        } else {
          this.setState({
            sent: false,
            disabled: false
          })
        }
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="first-name">Enter first name</label>
        <input id="firstname" name="firstname" type="text" />

        <label htmlFor="last-name">Enter last name</label>
        <input id="lastname" name="lastname" type="text" />

        <label htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="message">Enter your message</label>
        <input id="message" name="message" type="text" />

        <button>Send</button>
       
      </form>
    );
  }}



export default Form;