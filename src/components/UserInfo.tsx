
import styled from "styled-components"
import { useAppSelector } from "../hooks/appHook";
import ImageCircle from "./image/ImageCircle";
import Signout from "./Signout";
import { TitleStyled } from "./TitleStyled";

const UserInfoStyled = styled.div`
  width: 100%;
`;

const UserInfoFrameStyled = styled.div`
  margin: 5px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #221f2a;
  border-radius: 20px;
  padding: 20px 0px 10px 0px;

  button {
    margin-top: 20px;
  }
`;  

const UserInfo = () => {
  const currentUser = useAppSelector(state => state.userState.user)

  return (
    <UserInfoStyled>
      <UserInfoFrameStyled>
        <ImageCircle 
          src={currentUser.avatar} 
          width="90px" />

        <TitleStyled fontSize="18px" padding="15px 0 0 0">
          {currentUser.name}
        </TitleStyled>

        <TitleStyled fontSize="18px" color="#7d7c89" padding="0 0 10px 0">
          {currentUser.email}
        </TitleStyled>

        <Signout />
      </UserInfoFrameStyled>
    </UserInfoStyled>
  );
};

export default UserInfo;
