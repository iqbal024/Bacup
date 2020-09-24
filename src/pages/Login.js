import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

const Login = () => (
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='at'
            iconPosition='left'
            label='Email'
            placeholder='Enter your email'
          />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Link to="/formRegistration">
            <Button content='Registration' icon='signup' size='big' />
        </Link>
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
)

export default Login
