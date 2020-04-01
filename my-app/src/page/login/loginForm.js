import React, { Component } from "react";
import { Form, FormControl, Container, InputGroup } from "react-bootstrap";
import API from "../../api/api";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BasicExample from "../../route/route";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { status: false, dirty: false };
    this.usernameController = React.createRef();
    this.passwordController = React.createRef();
  }
  Login = async (username, password) => {
    const square = new API();
    var loginStatus = await square.Login(
      this.usernameController.current.value,
      this.passwordController.current.value
    );
    this.setState({ status: loginStatus });
    if (loginStatus === true) window.location.href = "/home";
  };

  LoginClick() {
    this.Login();
  }
  keyPressed = event => {
    if (event.key === "Enter") {
      this.LoginClick();
    }
  };
  render() {
    return (
      <div
        style={{
          padding: (window.innerHeight * 10) / 100,
          width: "100%",
          height: window.innerHeight,
          backgroundImage: `url(${"https://www.ecopetit.cat/wpic/mpic/101-1013587_android-green-background-hd-desktop-wallpaper-background-hd.jpg"})`
        }}
      >
        <Container className="text-center">
          <Form>
            <Form.Group>
              <Form.Label>
                <h2 style={{ color: "#efc" }}>
                  Welcome to Apple.Cigarette.com !!!
                </h2>
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <h3 className="primary">Register</h3>
              </Form.Label>
            </Form.Group>
          </Form>
          <div
            style={{ width: "500px", textAlign: "center", margin: "0 auto" }}
          >
            <InputGroup size="md" className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-lg">
                  Username:
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                ref={this.usernameController}
                onKeyPress={this.keyPressed}
                aria-label="Small"
                type="text"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
          </div>
          <div
            style={{
              width: "500px",
              textAlign: "center",
              margin: "0 auto",
              paddingTop: "20px"
            }}
          >
            <InputGroup size="md" className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-lg">
                  <span> Password:&nbsp;</span>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="password"
                ref={this.passwordController}
                onKeyPress={this.keyPressed}
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
          </div>
          <div
            style={{
              width: "500px",
              textAlign: "center",
              margin: "0 auto",
              paddingTop: "20px"
            }}
          >
            <button
              type="button"
              className="btn btn-large btn-block btn-primary"
              onClick={() => {
                this.LoginClick();
              }}
            >
              Login
            </button>
          </div>
        </Container>
      </div>
    );
  }
}

export default LoginForm;
