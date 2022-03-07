import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { Header } from "antd/lib/layout/layout";

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",



    }

  }
  login() {

    let request = JSON.stringify({
      "email": this.state.email,
      "password": this.state.password
    });
    try {
      fetch("https://reqres.in/api/login", {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: request
      })

        .then(response => response.json())
        .then(result => {
          console.log(result)
          if (result.token) {
            alert("Successfully Logged In")
          }
          else if (result.error) {
            alert(result.error)
          }

        })
        .catch(error => {
          console.log('error', error)
          alert(error)
        });
    }
    catch (error) {
      console.log('e', error)

    }

  }
  render() {
    return (

      <div id="loginform">
     
        <h1 id="headerTitle">Welcome Back</h1>
        <hr></hr>
        <h2 style={{ textAlign: "center" }}>Vouch Digital Here!!</h2><br></br><br></br>
        <label className="row">
          <input className="row input" type="text" placeholder="Email Address*" onChange={(e) => this.setState({ email: e.target.value })} /> </label><br></br><br></br>
        <label className="row" >
          <input className="row input" type="password" placeholder="Password*" onChange={(e) => this.setState({ password: e.target.value })} />
        </label><br></br><br></br>
        <button type="submit" className="btn" onClick={() => this.login()}>Login</button><br></br><br></br>
        <Checkbox className="rem">Remember me</Checkbox>
        
      </div>

    )
  }
}
export default App;
