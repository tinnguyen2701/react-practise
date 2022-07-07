import styled from "styled-components"
import { useGetSummaryPostQuery } from "../redux/apis/postApi";
import LastMonthHightLight from "./LastMonthHightLight";
import TotalPostThisWeek from "./TotalPostThisWeek";
import TotalScheduleToday from "./TotalScheduleToday";

const SummaryScheduleStyled = styled.div`
  display: flex;
  height: 150px;
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
        <LastMonthHightLight 
          isLoading={isLoading} 
          isSuccess={isSuccess}
          images={data?.hightLightImages || []} />
      </SummaryItemContainerStyled>

      <SummaryItemContainerStyled>
        <TotalScheduleToday
          isLoading={isLoading}
          isSuccess={isSuccess}
          numberScheduleForToday={data?.numberScheduleForToday || 0} />
        
      </SummaryItemContainerStyled>

      <SummaryItemContainerStyled>
        <TotalPostThisWeek 
          isLoading={isLoading}
          isSuccess={isSuccess}
          numberPostThisWeek={data?.numberPostThisWeek || 0} />
        
      </SummaryItemContainerStyled>
    </SummaryScheduleStyled>
  );
};

export default SummarySchedule;
