import Navigation from "./Navigation";
import UserInfo from "./UserInfo";
import styled from "styled-components"

const SideBarStyled = styled.div`
  display: flex;
  flex-direction: column;  
  background: #151419;
  width: 15%;
    
  > img {
    height: 250px;
  }
`;


const SideBar = () => {
  return (
    <SideBarStyled>
        <img 
          src={process.env.PUBLIC_URL + "/assets/images/brand.png"} 
          className="App-logo" 
          alt="logo"
           />

        <Navigation />

        <UserInfo />
    </SideBarStyled>
  );
};

export default SideBar;
