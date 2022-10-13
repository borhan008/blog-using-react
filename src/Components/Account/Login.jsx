import React, { useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Component = styled(Box)`
  width: 400px;
  margin: 0 auto;
  box-shadow: 5px 2px 5px 2px #eee;
  padding: 10px;
  border: 1px solid #eee;
`;
const Wrapper = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
`;

export default function Login() {
  const [account, setAccount] = useState("login");

  const signUpValueInitial = {
    name : '',
    username : '',
    password:  ''
  };

  const [signUp, setSignUp] = useState(signUpValueInitial);

  const onInputChange = (e) => {
    setSignUp({...signUp, [e.target.name] : e.target.value});
    console.log(signUp);
  }




  const toggleAccount = () => {
    if (account === "login") setAccount("register");
    else setAccount("login");
  };
  return (
    <Component>
      <Typography style={{ textAlign: "center" }} variant="h4" component="h2">
        Borhan
      </Typography>
      {account === "login" ? (
        <Wrapper>
          <TextField id="standard-basic" label="Username" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />
          <Button variant="contained">Login</Button>
          <Typography
            style={{ textAlign: "center" }}
            variant="h6"
            component="h2"
          >
            or
          </Typography>
          <Button onClick={toggleAccount}>Create New Account</Button>
        </Wrapper>
      ) : (
        <Wrapper>
          <TextField id="standard-basic" onChange={(e) => onInputChange(e)} name="name" label="Name" variant="standard" />
          <TextField id="standard-basic"  onChange={(e) => onInputChange(e)} name="username"  label="Username" variant="standard" />
          <TextField id="standard-basic"   onChange={(e) => onInputChange(e)} name="password"  label="Password" variant="standard" />
          <Button variant="contained">Sign Up</Button>
          <Typography
            style={{ textAlign: "center" }}
            variant="h6"
            component="h2"
          >
            or
          </Typography>
          <Button onClick={toggleAccount}>Login</Button>
        </Wrapper>
      )}
    </Component>
  );
}
