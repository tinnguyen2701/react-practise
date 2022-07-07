import { PlusOutlined } from "@ant-design/icons";
import styled from "styled-components"
import ButtonWrapped from "./ButtonWrapped";

const ButtonAddPlusStyled = styled(ButtonWrapped)`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;

const ButtonAddPlus = () => {
  return (
    <ButtonAddPlusStyled onClick={() => {}}>
        <PlusOutlined />
    </ButtonAddPlusStyled>
  );
};

export default ButtonAddPlus;
