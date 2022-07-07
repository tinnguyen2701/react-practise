import Navigation from "./Navigation";
import UserInfo from "./UserInfo";
import styled from "styled-components"
import Logo from "./Logo";

const SideBarStyled = styled.div`
  display: flex;
  flex-direction: column;  
  background: #151419;
  width: 15%;
`;


const SideBar = () => {
  return (
    <SideBarStyled>
        <Logo />

        <Navigation />

        <UserInfo />
    </SideBarStyled>
  );
};

export default SideBar;
