import styled from "styled-components";

export const NavBarStyled = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  padding: 20px;
  width: 100%;
  height: 30px;
  z-index: 1;
  transition-timing-function: ease-in;
  transition: all 0.5s;

  ${(props) => props.show && `background-color: #111;`}
`;

export const StyledLogo = styled.img`
  position: fixed;
  left: 0;
  top: 10px;
  width: 80px;
  object-fit: contain;
  padding-left: 20px;
  cursor: pointer;
`;

export const StyledAvatar = styled.img`
  position: fixed;
  right: 20px;
  width: 30px;
  cursor: pointer;
`;

export const StyledNavContents = styled.div`
  display: flex;
  justify-content: space-between;
`;
