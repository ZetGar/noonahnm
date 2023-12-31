import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Loginpage = ({setAuthenticate}) => {

  const navigate = useNavigate();
  
  const loginUser = (event)=>{
    event.preventDefault();
    console.log('login user function issue');
    setAuthenticate(true);
    navigate('/shopping')
  }
  
  return (
    <Container>
      <Form onSubmit={(event)=>{loginUser(event)}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="email" placeholder="ID" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Loginpage;
