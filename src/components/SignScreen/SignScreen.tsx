import React, { useRef } from "react";
import { auth } from "../../firebase";
import {
  StyledSignScreen,
  StyledSignForm,
  StyledInput,
  StyledButton,
  StyledHeader,
  StyledH4,
} from "./SignScreen.styled";
import {
  createUserWithEmailAndPassword,
  UserCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignScreen = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const register = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current?.value || "",
      passwordRef.current?.value || ""
    )
      .then((authUser: UserCredential) => {
        console.log(authUser);
      })
      .catch((error: Error) => {
        alert(error.message);
      });
  };

  const signIn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current?.value || "",
      passwordRef.current?.value || ""
    )
      .then((authUser: UserCredential) => {
        console.log(authUser);
      })
      .catch((error: Error) => {
        alert(error.message);
      });
  };

  return (
    <StyledSignScreen>
      <StyledSignForm>
        <StyledHeader>Sign In</StyledHeader>
        <StyledInput ref={emailRef} placeholder='Email' type='email' />
        <StyledInput ref={passwordRef} placeholder='Password' type='password' />
        <StyledButton type='submit' onClick={signIn}>
          Sign In
        </StyledButton>
        <StyledH4>
          <span>New to Neflix? </span>
          <a onClick={register}>Sign up now.</a>
        </StyledH4>
      </StyledSignForm>
    </StyledSignScreen>
  );
};

export default SignScreen;
