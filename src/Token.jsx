import React, { Component } from "react";

export default class ClassCmp extends Component {
  constructor() {
    super();
    this.state= {
        email : null,
        password : null,
        login : false,
        store : null
    }
  }

  login(){
      fetch("http://localhost:3001/", {
          method : "POST",
          body : JSON.stringify(this.state)
      }).then((res) => {
          res.json().then((result) => {
              console.log("resulr",result)
              localStorage.setItem("loginjwt",JSON.stringify({
                  login : true,
                  token : result.token
              }))
          })
      })
  }

  render() {
    return (
      <div>
          <input type="text" onChange={(e) => {this.setState({ email : e.target.value })}} />
          <input type="text" onChange={(e) => {this.setState({ password : e.target.value })}} />
          <button onClick={() => {this.login()}} >Login</button>
      </div>
    );
  }
}
