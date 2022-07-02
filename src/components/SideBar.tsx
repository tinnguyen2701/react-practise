import Navigation from "./Navigation";
import UserInfo from "./UserInfo";
import brand from '../assets/brand.png';
import styled from "styled-components"

const SideBarStyled = styled.div`
    background: #151419;

    
`;


const SideBar = () => {
  return (
    <SideBarStyled>
        <img src={brand} className="App-logo" alt="logo" />

        <Navigation />

        <UserInfo />
    </SideBarStyled>
  );
};

export default SideBar;
