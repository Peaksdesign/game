import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { gql } from '@apollo/client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { loginUserWithPassword } from 'store/loggedUser/action';

const REGISTER_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      name
    }
  }
`;

const LOGIN_USER = gql`
  mutation AuthenticateUserWithPassword($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      token
      item {
        name
      }
    }
  }
`;

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [registerUser, { loading, error, data }] = useMutation(REGISTER_USER);
  const [
    loginUser,
    { loading: loadingLogin, error: errorLogin, data: dataLogin },
  ] = useMutation(LOGIN_USER);

  if (dataLogin) {
    dispatch(loginUserWithPassword(dataLogin));
    history.push('/asdfaref');
  }

  return (
    <>
      {(error || errorLogin || data) && (
        <Row>
          <Col>
            {(error || errorLogin) && (
              <span className="error">
                {error?.message || errorLogin?.message}
              </span>
            )}
            {data && <span>Uzivatel vytvoren, muzete se prihlasit.</span>}
          </Col>
        </Row>
      )}
      <Row>
        <Col>
          <input
            type="name"
            name="name"
            placeholder="Jméno"
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="password"
            name="password"
            placeholder="Heslo"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="primary"
            disabled={loading || loadingLogin}
            onClick={() =>
              loginUser({
                variables: { email: email, password: password },
              })
            }
          >
            Přihlásit
          </Button>
        </Col>
        <Col>
          <Button
            variant="dark"
            disabled={loading || loadingLogin}
            onClick={() =>
              registerUser({
                variables: { name: name, email: email, password: password },
              })
            }
          >
            Registrovat
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default LoginForm;
