import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { useAppSelector } from "../hooks/appHook";
import { useLogoutUserMutation } from "../redux/apis/authApi";
import ButtonWrapped from "./button/ButtonWrapped";
import ImageCircle from "./image/ImageCircle";
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
  const navigate = useNavigate();

  const currentUser = useAppSelector(state => state.userState.user)

  const [triggerLogout] = useLogoutUserMutation();

  const onClickLogout = () => {
    triggerLogout().unwrap().then(() => {
      navigate("/", { replace: true })
    });
  }

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

        <ButtonWrapped style={{width: "70%"}} 
          onClick={() => onClickLogout()}>
            <LogoutOutlined />
            Sign out
        </ButtonWrapped>
      </UserInfoFrameStyled>
    </UserInfoStyled>
  );
};

export default UserInfo;
