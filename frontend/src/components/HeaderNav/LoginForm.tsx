import * as React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
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

const Checkbox = styled('input')`
background-color: initial;
cursor: default;
margin: 3px 0.5ex;
padding: initial;
border: initial;
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
  }
  `

const LogInModal = () => {
    return (
        <LoginContainer>
            <label><b>Username</b></label>
            <Input type="text" placeholder="Enter Username" name="uname" />

            <label><b>Password</b></label>
            <Input type="password" placeholder="Enter Password" name="psw" />

            <Button type="submit">Login</Button>
            <label>
                <Checkbox type="checkbox" name="remember" /> Remember me
</label>

            <LoginContainer>
                <Signin>Forgot <a href="#">password?</a></Signin>
            </LoginContainer>
        </LoginContainer>
    )
}

export default LogInModal;