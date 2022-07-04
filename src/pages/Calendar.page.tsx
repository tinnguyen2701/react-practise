import styled from "styled-components"
import ButtonWrapped from "../components/button/ButtonWrapped";
import ListFriends from "../components/ListFriends";
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

      </CalendarStyled>
    );
  };
  
  export default CalendarPage;
  