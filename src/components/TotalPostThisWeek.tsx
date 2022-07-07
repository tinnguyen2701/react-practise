import { TitleStyled } from "./TitleStyled";

interface TotalPostThisWeekProps {
    isLoading?: boolean,
    isSuccess?: boolean
    numberPostThisWeek: number
}

const TotalPostThisWeek = ({isLoading, isSuccess, numberPostThisWeek}: TotalPostThisWeekProps) => {
  return (
    <>
      {
          isLoading ? 
            <p>...loading..</p> :
            
            isSuccess ?
            <>
              <TitleStyled fontSize="35px">
                {numberPostThisWeek}
              </TitleStyled>
              <TitleStyled color="#7d7c89">
                Posted this week
              </TitleStyled>
            </> : <></>
            
        }
    </>
  );
};

export default TotalPostThisWeek;
