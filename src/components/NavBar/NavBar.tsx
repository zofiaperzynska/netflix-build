import React, { useState, useEffect } from "react";
import {
  NavBarStyled,
  StyledLogo,
  StyledAvatar,
  StyledNavContents,
} from "../NavBar/NavBar.styled";
import { Navigate, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const history = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <NavBarStyled show={show}>
      <StyledNavContents>
        <StyledLogo
          onClick={() => history("/")}
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='nopic'
        />

        <StyledAvatar
          onClick={() => history("/profile")}
          src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png'
          alt=''
        />
      </StyledNavContents>
    </NavBarStyled>
  );
};

export default NavBar;
