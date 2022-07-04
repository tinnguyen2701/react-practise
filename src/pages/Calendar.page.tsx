import styled from "styled-components"
import ButtonWrapped from "../components/button/ButtonWrapped";
import CalendarPosting from "../components/CalendarPosting";
import ListFriends from "../components/ListFriends";
import SummarySchedule from "../components/SummarySchedule";
import { TitleStyled } from "../components/TitleStyled";

const CalendarStyled = styled.div`

`;

const PostScheduleStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CalendarPage = () => {
    return (
      <CalendarStyled>
        <ListFriends />

        <PostScheduleStyled>
          <TitleStyled>Post Schedule</TitleStyled>
          <ButtonWrapped onClick={() => {}}>Create a Post</ButtonWrapped>
        </PostScheduleStyled>

        <SummarySchedule />

        <CalendarPosting />
        
      </CalendarStyled>
    );
  };
  
  export default CalendarPage;
  