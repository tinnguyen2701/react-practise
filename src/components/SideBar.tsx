import Navigation from "./Navigation";
import UserInfo from "./UserInfo";
import styled from "styled-components"

const SideBarStyled = styled.div`
  display: flex;
  flex-direction: column;  
  background: #151419;
  width: 17%;
    
  > img {
    height: 300px;
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
