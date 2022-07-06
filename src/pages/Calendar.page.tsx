import { useState } from "react";
import styled from "styled-components"
import ButtonWrapped from "../components/button/ButtonWrapped";
import CalendarPosting from "../components/CalendarPosting";
import ListFriends from "../components/ListFriends";
import PostDetail from "../components/PostDetail";
import SummarySchedule from "../components/SummarySchedule";
import { TitleStyled } from "../components/TitleStyled";

const CalendarStyled = styled.div`
  display: flex;
  width: 100%;
`;

const CalendarScheduleStyled = styled.div`
  flex: 1;
  background-color: #1a1c20;
  padding: 0 20px;
`;

const PostScheduleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const CalendarPage = () => {
    const [postIdSelected, setPostIdSelected] = useState<string>("1");
    const [visiblePostDetail, setVisiblePostDetail] = useState<boolean>(false);

    const handleDateClick = (postId: string) => {
      // if (postId) {
        setPostIdSelected(postId);
        setVisiblePostDetail(true);
      // }
    }

    return (
      <CalendarStyled>
        <CalendarScheduleStyled>
          <ListFriends />

          <PostScheduleStyled>
            <TitleStyled fontSize="20px">Post Schedule</TitleStyled>
            <ButtonWrapped onClick={() => {}}>Create a Post</ButtonWrapped>
          </PostScheduleStyled>

          <SummarySchedule />

          <CalendarPosting onDateClick={(postId) => handleDateClick(postId)} />
          
        </CalendarScheduleStyled>

        {
          visiblePostDetail && <PostDetail postId={postIdSelected} />
        }

      </CalendarStyled>
    );
  };
  
  export default CalendarPage;
  