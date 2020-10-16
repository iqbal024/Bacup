import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

import { setUser } from "../helper/actions/authActions";

import logo from "../assets/images/Logo.jpg";

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    Email: "",
    Password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://backend.bacup.co/login", formValues)
      .then((res) => {
        const token = res.data.data[0];
        const user = jwt_decode(token);

        if (token.UserID === "00000000-0000-0000-0000-000000000000") {
          console.log("wrong credentials");
        } else {
          localStorage.setItem("TOKEN", token);

          dispatch(setUser(user));

          if (user.TypeUser === "SuperAdmin") {
            history.push("/users");
          } else {
            history.push("/joinSymposium");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Image src={logo} size="big" />
        <Header
          as="h2"
          color="teal"
          textAlign="center"
          style={{ marginTop: "0px" }}
        >
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              name="Email"
              value={formValues.Email}
              onChange={handleChange}
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              name="Password"
              value={formValues.Password}
              onChange={handleChange}
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="/registration">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
