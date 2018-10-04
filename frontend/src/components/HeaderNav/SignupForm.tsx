import * as React from 'react';
import styled from 'styled-components';


const SignupContainer = styled.div`
padding: 16px;
`

const Input = styled('input')`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
box-sizing: border-box;
`
const Button = styled.button`
background-color: #4CAF50;
color: white;
padding: 16px 20px;
margin: 8px 0;
border: none;
cursor: pointer;
width: 100%;
opacity: 0.9;
:hover {
  opacity: 1;
}
    `

const Signin = styled.span`
float: right;
padding-top: 16px;
  }
  `

const SignupForm = () => {
  return (
    <SignupContainer>
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <label ><b>Email</b></label>
      <Input type="text" placeholder="Enter Email" name="email" />

      <label><b>Password</b></label>
      <Input type="password" placeholder="Enter Password" name="psw" />

      <label><b>Repeat Password</b></label>
      <Input type="password" placeholder="Repeat Password" name="psw-repeat" />
      <hr />
      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

      <Button type="submit">Register</Button>
      <Signin>
        <p>Already have an account? <a href="#">Sign in</a>.</p>
      </Signin>
    </SignupContainer>
  );
}

export default SignupForm;