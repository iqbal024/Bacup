import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import axios from "axios";
import logo from '../assets/images/Logo.jpg';

const LoginForm = () => {
  const [formValues, setFormValues] = useState( {
    Email: '',
    Password: '',
  });

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formValues);
    axios
      .post("http://backend.bacup.co/login", formValues)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleChange(e) {
    setFormValues({...formValues,
      [e.target.name]: e.target.value,
    })
  }

  return <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Image src={logo} size="big"/>
      <Header as='h2' color='teal' textAlign='center' style={{ marginTop: '0px' }}>
         Log-in to your account
      </Header>
      <Form size='large' onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input fluid name='Email' value={formValues.Email} onChange={handleChange} icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            name='Password'
            value={formValues.Password}
            onChange={handleChange}
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='/registration'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
}

export default LoginForm