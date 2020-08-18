import React from 'react';
import { Container } from 'react-bootstrap';
import LoginForm from 'components/LoginForm';

function Login() {
  return (
    <>
      <Container>
        <h2>Login</h2>
        <LoginForm />
      </Container>
    </>
  );
}

export default Login;
