import { RightSquareOutlined } from "@ant-design/icons";
import styled from "styled-components"
import ListThumbnails from "./ListThumbnails";
import { TitleStyled } from "./TitleStyled";

const LastMonthHighLightStyled = styled.div`
  width: 100%;
  padding: 0 30px;
`;

const CheckoutContainerStyled = styled.div`
  display: flex;
  align-items: flex-end;

  p {
    flex: 1;
    text-align: center;
    line-height: 0px;
  }
`;

interface LastMonthHightLightProps {
    isLoading?: boolean,
    isSuccess?: boolean,
    images: string[]
}

const LastMonthHightLight = ({isLoading, isSuccess, images}: LastMonthHightLightProps) => {
  return (
    <LastMonthHighLightStyled>
        <TitleStyled color="#d0d1e3" padding="0 0 10px 0">Last Month HighLights</TitleStyled>

        <CheckoutContainerStyled>
            {isLoading ?
            <p>....loading...</p> :
            isSuccess ? <ListThumbnails 
                images={images}
                width="70px"
                height="70px"
                borderRadius="15px" /> : <></>
            }

            <TitleStyled color="#7d7c89">
            Checkout <RightSquareOutlined />
            </TitleStyled>
        </CheckoutContainerStyled>
    </LastMonthHighLightStyled>
  );
};

export default LastMonthHightLight;
