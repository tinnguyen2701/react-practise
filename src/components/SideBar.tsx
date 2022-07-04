import Navigation from "./Navigation";
import UserInfo from "./UserInfo";
import styled from "styled-components"

const SideBarStyled = styled.div`
    background: #151419;
    width: 200px;
    
    > img {
      width: 100%;
    }
    
`;


const SideBar = () => {
  return (
    <SideBarStyled>
        <img src={process.env.PUBLIC_URL + "/assets/images/brand.png"} className="App-logo" alt="logo" />

        <Navigation />

        <UserInfo />
    </SideBarStyled>
  );
};

export default SideBar;
