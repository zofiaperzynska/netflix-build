import styled from "styled-components";

export const StyledProfileScreen = styled.div`
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
`;

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  margin-top: 8%;
  max-width: 800px;

  h1 {
    font-size: 60px;
    font-weight: 400;
    border-bottom: 1px solid #282c2d;
    margin-bottom: 20px;
  }
`;

export const StyledInfo = styled.div`
  display: flex;

  img {
    height: 100px;
  }
`;

export const StyledDetails = styled.div`
  color: white;
  margin-left: 25px;
  flex: 1;

  h2 {
    background-color: gray;
    padding: 15px;
    font-size: 15px;
    padding-left: 20px;
  }
`;

export const StyledPlans = styled.div`
  margin-top: 20px;
  h3 {
    border-bottom: 1px solid #282c2d;
    padding-bottom: 10px;
  }
`;

export const StyledButton = styled.div`
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 5%;
  text-align: center;
  color: #fff;
  background-color: #e50914;
  cursor: pointer;
  border: none;
`;
