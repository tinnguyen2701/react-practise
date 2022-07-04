import { TitleStyled } from "./TitleStyled";
import React from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import ImageThumbnail from "./image/ImageThumbnail";


const CalendarPosting = () => {
  const handleDateClick = (arg: any) => { // bind with an arrow function
    alert(arg.dateStr)
  }

  return (
    <>
      <TitleStyled>
        September
      </TitleStyled>

      <FullCalendar 
        plugins={[interactionPlugin, dayGridPlugin]}
        selectable={true}
        firstDay={1}
        initialView="dayGridMonth"
        aspectRatio={1.6}
        dateClick={(a) => handleDateClick(a)}
        events={[
          {
            title: "Early Bird Registration Deadline",
            description: "asdasd",
            date: "2022-07-04"
          },
          { title: "event 2", description: "asdasdasd", date: "2022-07-05" }
        ]}
        eventContent={renderEventContent}
      />
    </>
  );
};

export default CalendarPosting;


function renderEventContent(eventInfo: any) {
  return (
    <>
      <div style={{display: "flex"}}>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
        <ImageThumbnail src="https://lucloi.vn/wp-content/uploads/2021/03/Untitled-1.jpg" width="60px" height="40px" />

      </div>
    </>
  )
}