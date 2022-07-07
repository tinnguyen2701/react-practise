import { TitleStyled } from "./TitleStyled";

interface TotalScheduleTodayProps {
    isLoading?: boolean,
    isSuccess?: boolean
    numberScheduleForToday: number
}

const TotalScheduleToday = ({isLoading, isSuccess, numberScheduleForToday}: TotalScheduleTodayProps) => {
  return (
    <>
      {
          isLoading ? 
            <p>...loading..</p> :
            isSuccess ? 
              <>
                <TitleStyled fontSize="35px">
                  {numberScheduleForToday}
                </TitleStyled>
                <TitleStyled color="#7d7c89">
                  Scheduled for today
                </TitleStyled>
              </> : <></>
        }
    </>
  );
};

export default TotalScheduleToday;
