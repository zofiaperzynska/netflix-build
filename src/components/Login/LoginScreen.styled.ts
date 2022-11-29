import styled from "styled-components";

export const StyledLoginScreen = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
  background-color: white;
  background: url("https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png")
    center no-repeat;
  background-size: cover;
`;

export const StyledBackground = styled.div``;

export const StyledLogo = styled.img`
  position: fixed;
  left: 0;
  width: 150px;
  object-fit: contain;
  padding-left: 20px;
`;

export const StyledButton = styled.button`
  position: fixed;
  right: 20px;
  top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #e50914;
  cursor: pointer;
  border: none;
`;

export const ScreenGradient = styled.div`
  width: 100%;
  z-index: 1;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

export const LoginBody = styled.div`
  position: absolute;
  top: 30%;
  text-align: center;
  z-index: 1;
  color: #fff;
  padding: 20px;
`;

export const StyledHeader = styled.h1`
  font-size: 3.125rem;
  margin-bottom: 20px;
`;

export const StyledH2 = styled.h2`
  font-size: 2 rem;
  font-weight: 400;
  margin-bottom: 30px;
`;

export const StyledH3 = styled.h3`
  font-size: 1.3 rem;
  font-weight: 400;
`;

export const FormWrapper = styled.div`
  margin: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginInput = styled.input`
  padding: 10px;
  outline-width: 0;
  height: 31.5px;
  width: 30%;
  border: none;
  max-width: 600px;
`;

export const GetStartedButton = styled.button`
  padding: 16px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #e50914;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;
