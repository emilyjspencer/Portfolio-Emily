import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from '../UI/Header/Header';
import Footer from '../UI/Footer/Footer';

import './ContactForm.css';


class ContactForm extends Component {
    constructor(props)  {
        super(props);

        this.state = {
          name: '',
          email: '',
          message: '',
          sent: null,
          disabled: false
        }
    }   
    
    handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
          [name]: value
      })
  }

  handleSubmit(event) {

      event.preventDefault();
  

    axios({
      method: "POST",
      url: "https://portfolioemilyjane.herokuapp.com/new",
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }
    }).then((response) => {
      console.log(response)
        if (response.data.msg === "success"){
            alert("Your email was successfully sent");
            this.resetForm()
        } else if(response.data.msg === "fail"){
            alert("Please try again")
        }
    })
  };

  resetForm(){
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  }

render () {
  return (
    <>
    <Header />
    <div className="contactpage">
      <div className="text">
        <h3>Get in touch </h3>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicText">
            <Form.Control
                name="name"
                type="text"
                placeholder="Enter your first name"
                value={this.state.name}
                onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control name="email" type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control name="message" as="textarea" rows="5" placeholder="Enter message" value={this.state.message} onChange={this.handleChange}/>
          </Form.Group>

          <Button variant="secondary" type="submit" disabled={this.state.disabled}>
            Send Message
          </Button>
          <br />
          <br />
        </Form>
      </div>
      <Footer />
    </div>
    </>
  );
  }}



export default ContactForm;