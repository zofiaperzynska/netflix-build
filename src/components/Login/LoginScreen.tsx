import React, { useState } from "react";
import {
  StyledLoginScreen,
  StyledBackground,
  StyledLogo,
  StyledButton,
  ScreenGradient,
  LoginBody,
  StyledHeader,
  StyledH2,
  StyledH3,
  LoginInput,
  GetStartedButton,
  StyledForm,
  FormWrapper,
} from "./LoginScreen.styled";
import SignScreen from "../SignScreen/SignScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <StyledLoginScreen>
      <StyledBackground>
        <StyledLogo
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt=''
        />
        <StyledButton onClick={() => setSignIn(true)}>Sign In</StyledButton>
        <ScreenGradient />
      </StyledBackground>
      <LoginBody>
        {signIn ? (
          <SignScreen />
        ) : (
          <>
            <StyledHeader>
              Unlimited films, TV programmes and more.
            </StyledHeader>
            <StyledH2>Watch anywhere. Cancel at any time.</StyledH2>
            <StyledH3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </StyledH3>
            <FormWrapper>
              <StyledForm>
                <LoginInput type='email' placeholder='Email Address' />
                <GetStartedButton onClick={() => setSignIn(true)}>
                  GET STARTED
                </GetStartedButton>
              </StyledForm>
            </FormWrapper>
          </>
        )}
      </LoginBody>
    </StyledLoginScreen>
  );
};

export default LoginScreen;
