import styled from "styled-components";

export const StyledSignScreen = styled.div`
  display: flex;
  max-width: 300px;
  padding: 70px;
  background: rgba(0, 0, 0, 0.85);
  min-width: 450px;
  align-items: center;
  justify-content: center;
`;

export const StyledSignForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;
`;

export const StyledHeader = styled.h1`
  text-align: left;
  margin-bottom: 25px;
`;

export const StyledInput = styled.input`
  outline-width: 0;
  height: 40px;
  margin-bottom: 14px;
  border-radius: 5px;
  border: none;
  padding: 5px 15px;
`;

export const StyledButton = styled.button`
  padding: 16px 20px;
  font-size: 1rem;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #e50914;
  font-weight: 600;
`;

export const StyledH4 = styled.h4`
  text-align: left;
  margin-top: 30px;

  span {
    color: gray;
  }
  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
