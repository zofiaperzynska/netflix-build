import styled from "styled-components";
import { Url } from "url";

export const StyledBanner = styled.header<{ url: string }>`
  height: 448px;
  background-size: cover;
  background-image: url(${(props) => props.url});
  background-position: center center;
  position: relative;
  color: white;
  object-fit: contain;
`;

export const StyledBannerContents = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;

export const StyledBannerTitle = styled.div`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

export const StyledButtonsDiv = styled.div``;

export const StyledButton = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.5rem 2rem;
  margin-right: 1rem;
  background-color: rgba(51, 51, 51, 0.5);

  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

export const BannerDescription = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding: 0.5rem 2rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
`;

export const FadeBottom = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
