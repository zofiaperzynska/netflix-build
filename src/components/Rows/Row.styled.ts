import styled from "styled-components";

export const StyledRow = styled.div`
  color: white;
  margin-left: 20px;
`;

export const StyledRowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledImage = styled.img<{ isLarge: boolean }>`
  max-height: 100px;
  object-fit: contain;
  margin-right: 10px;
  width: 100%;
  transition: transform 450ms;

  &:hover {
    transform: scale(1.08);
    opacity: 1;
  }

  ${(props) =>
    props.isLarge &&
    `
  max-height: 250px;
  &:hover{
    transform: scale(1.09);
    opacity: 1;
  }
  `}
`;
