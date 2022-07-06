import { RightSquareOutlined } from "@ant-design/icons";
import styled from "styled-components"
import { useGetSummaryPostQuery } from "../redux/apis/postApi";
import ListThumbnails from "./ListThumbnails";
import { TitleStyled } from "./TitleStyled";

const LastMonthHighLightStyled = styled.div`
  width: 100%;
  padding: 0 30px;
`;

const SummaryScheduleStyled = styled.div`
  display: flex;
  height: 150px;
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

const SummaryItemContainerStyled = styled.div`
  flex: 1;
  margin-left: 20px;
  border-radius: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #232631;

  :first-child {
    flex: 2;
    margin-left: 0;
  }
`;

const SummarySchedule = () => {
  const { data, isLoading, isSuccess } = useGetSummaryPostQuery({});

  return (
    <SummaryScheduleStyled>
      <SummaryItemContainerStyled>
        <LastMonthHighLightStyled>
            <TitleStyled color="#d0d1e3" padding="0 0 10px 0">Last Month HighLights</TitleStyled>

            <CheckoutContainerStyled>
              {isLoading ?
                <p>....loading...</p> :
                isSuccess ? <ListThumbnails 
                  images={data.hightLightImages}
                  width="70px"
                  height="70px"
                  borderRadius="15px" /> : <></>
              }

              <TitleStyled color="#7d7c89">
                Checkout <RightSquareOutlined />
              </TitleStyled>
            </CheckoutContainerStyled>
        </LastMonthHighLightStyled>
      </SummaryItemContainerStyled>

      <SummaryItemContainerStyled>
        {
          isLoading ? 
            <p>...loading..</p> :
            isSuccess ? 
              <>
                <TitleStyled fontSize="35px">
                  {data.numberScheduleForToday}
                </TitleStyled>
                <TitleStyled color="#7d7c89">
                  Scheduled for today
                </TitleStyled>
              </> : <></>
        }
      </SummaryItemContainerStyled>

      <SummaryItemContainerStyled>
        {
          isLoading ? 
            <p>...loading..</p> :
            
            isSuccess ?
            <>
              <TitleStyled fontSize="35px">
                {data.numberPostThisWeek}
              </TitleStyled>
              <TitleStyled color="#7d7c89">
                Posted this week
              </TitleStyled>
            </>
             : <></>
            
        }
      </SummaryItemContainerStyled>
    </SummaryScheduleStyled>
  );
};

export default SummarySchedule;
