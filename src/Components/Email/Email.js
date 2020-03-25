import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Email.css';

export default class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holder: '',
      email: ''
    }
  }

  async componentDidMount() {
    const response = await fetch('/email/search');
    const data = await response.json();
    this.setState({holder: data[0].email});
  }

  handleSend = () => {
    const data = {
      email: this.state.email
    }

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('/email/patch', options);    
    this.setState({holder: this.state.email})
  }

  render() {
    return (
      <div id="returnEmail">
        <TextField
          label="Email Destinatary"
          placeholder={this.state.holder}          
          type="email"
          onChange={(e) => {this.setState({email: e.target.value})}}
        />
        <Button variant="contained" color="primary" onClick={this.handleSend}>Send</Button>
      </div>
    );
  }
}