import { TitleStyled } from "./TitleStyled";
import React from 'react';
import styled from "styled-components"
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import ImageThumbnail from "./image/ImageThumbnail";
import ListThumbnails from "./ListThumbnails";

const CalendarPostingStyled = styled.div`
  .fc-header-toolbar {
    display: none;
  }
`;

const FullCalendarStyled = styled(FullCalendar)`
`

const FullCalendarWrapperStyled = styled.div`
  background: #23242a;
  border-radius: 20px;
  .fc td, .fc th {
    border: 1px solid #26282e;
    color: white;
  }
  
  .fc thead th:first-child {
    border-radius: 20px;
  }

  a.fc-daygrid-event.fc-daygrid-block-event.fc-h-event.fc-event.fc-event-start.fc-event-end {
    background: transparent;
    border: none;
  }

  .fc .fc-scrollgrid-liquid {
    border: none;

    a {
      color: #848492;
    }

    .fc-highlight {
      background-image: linear-gradient(43deg,#4158D0 0%,#C850C0 46% 100%);
    }
  }
`

const CalendarPosting = () => {
  const handleDateClick = (arg: any) => { // bind with an arrow function
    // alert(arg.dateStr)
  }

  return (
    <CalendarPostingStyled>
      <TitleStyled fontSize="20px" padding="20px 0">
        September
      </TitleStyled>

      <FullCalendarWrapperStyled>
        <FullCalendarStyled
          plugins={[interactionPlugin, dayGridPlugin]}
          selectable={true}
          firstDay={1}
          initialView="dayGridMonth"
          aspectRatio={1.6}
          dateClick={(a) => handleDateClick(a)}
          events={[
            {
              title: "Early ",
              description: "asdasd",
              date: "2022-07-04"
            },
            { title: "event 2", description: "asdasdasd", date: "2022-07-05" }
          ]}
          eventContent={renderEventContent} />
      </FullCalendarWrapperStyled>
      
    </CalendarPostingStyled>
  );
};

export default CalendarPosting;


function renderEventContent(eventInfo: any) {
  return (
    <>
      <div>
        {/* <b>{eventInfo.timeText}</b> */}
        {/* <i>{eventInfo.event.title}</i> */}

        <ListThumbnails 
          images={["https://lucloi.vn/wp-content/uploads/2021/03/Untitled-1.jpg", "https://lucloi.vn/wp-content/uploads/2021/03/Untitled-1.jpg"]}
          width="50px"
          height="30px"
          borderRadius="5px" />
      </div>
    </>
  )
}