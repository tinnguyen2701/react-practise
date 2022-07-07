import styled from "styled-components"

const LogoStyled = styled.img`
    height: 250px;
`;

const Logo = () => {
  return (
    <LogoStyled
        src={process.env.PUBLIC_URL + "/assets/images/brand.png"} 
        className="App-logo" 
        alt="logo" />
  );
};

export default Logo;
