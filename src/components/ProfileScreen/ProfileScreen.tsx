import React from "react";
import {
  StyledProfileScreen,
  StyledBody,
  StyledInfo,
  StyledDetails,
  StyledPlans,
  StyledButton,
} from "./ProfileScreen.styled";
import NavBar from "../NavBar/NavBar";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <StyledProfileScreen>
      <NavBar />
      <StyledBody>
        <h1>Edit Profile</h1>
        <StyledInfo>
          <img
            src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png'
            alt=''
          />
          <StyledDetails>
            <h2>{user?.email}</h2>
            <StyledPlans>
              <h3>Plans</h3>
              <StyledButton onClick={() => auth.signOut()}>
                Sign Out
              </StyledButton>
            </StyledPlans>
          </StyledDetails>
        </StyledInfo>
      </StyledBody>
    </StyledProfileScreen>
  );
};

export default ProfileScreen;
