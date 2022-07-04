import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { useAppSelector } from "../hooks/appHook";
import { useLogoutUserMutation } from "../redux/apis/authApi";
import ButtonWrapped from "./button/ButtonWrapped";
import ImageCircle from "./image/ImageCircle";

const UserInfoStyled = styled.div`
    
`;

const UserInfo = () => {
  const navigate = useNavigate();

  const currentUser = useAppSelector(state => state.userState.user)

  const [triggerLogout, {isSuccess: isLogoutSuccess}] = useLogoutUserMutation();

  const onClickLogout = () => {
    triggerLogout().unwrap().then(() => {
      if(isLogoutSuccess) {
        navigate("/", { replace: true })
      }
    });
  }

  return (
    <UserInfoStyled>
      <ImageCircle 
        src={currentUser.avatar} 
        width="50px" 
        height="50px" />

      <div>
        <p>{currentUser.name}</p>
        <p>{currentUser.email}</p>
      </div>

      <ButtonWrapped 
        onClick={() => onClickLogout()}>
          <LogoutOutlined />
          Sign out
      </ButtonWrapped>
    </UserInfoStyled>
  );
};

export default UserInfo;
