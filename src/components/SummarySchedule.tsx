import { RightSquareOutlined } from "@ant-design/icons";
import styled from "styled-components"
import { useGetSummaryPostQuery } from "../redux/apis/postApi";
import ListThumbnails from "./ListThumbnails";
import { TitleStyled } from "./TitleStyled";

const LastMonthHighLightStyled = styled.div`
  border: 1px solid yellow;
`;

const SummaryScheduleStyled = styled.div`
  display: flex;
`;

const SummaryItemContainerStyled = styled.div`
  border: 1px solid tomato;
`;

const SummarySchedule = () => {
  const { data, isLoading, isSuccess } = useGetSummaryPostQuery({});

  return (
    <SummaryScheduleStyled>
      <SummaryItemContainerStyled>
        <LastMonthHighLightStyled>
            <TitleStyled>Last Month HighLights</TitleStyled>

            {isLoading ?
              <p>....loading...</p> :
              isSuccess ? <ListThumbnails images={data.hightLightImages} /> : <></>
            }

            <TitleStyled>
              Checkout <RightSquareOutlined />
            </TitleStyled>
        </LastMonthHighLightStyled>
      </SummaryItemContainerStyled>

      <SummaryItemContainerStyled>
        {
          isLoading ? 
            <p>...loading..</p> :
            isSuccess ? 
              <>
                <TitleStyled>
                  {data.numberScheduleForToday}
                </TitleStyled>
                <TitleStyled>
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
              <TitleStyled>
                {data.numberPostThisWeek}
              </TitleStyled>
              <TitleStyled>
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
