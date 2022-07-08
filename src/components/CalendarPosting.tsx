import { TitleStyled } from "./TitleStyled";
import React from 'react';
import styled from "styled-components"
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction" // needed for dayClick
import ListThumbnails from "./ListThumbnails";
import { postApi } from "../redux/apis";
import { IPost } from "../types";

const CalendarPostingStyled = styled.div`
  .fc-header-toolbar {
    display: none;
  }
`;

const FullCalendarStyled = styled(FullCalendar)`
`

const FullCalendarWrapperStyled = styled.div`
  min-height: 600px;
  padding-bottom: 15px;
  .fc-daygrid-day-frame.fc-scrollgrid-sync-inner {
    overflow: hidden;
  }

  .fc td, .fc th {
    border: 1px solid #26282e;
    color: white;
  }
  
  a.fc-daygrid-event.fc-daygrid-block-event.fc-h-event.fc-event.fc-event-start.fc-event-end {
    background: transparent;
    border: none;
  }

  .fc-scrollgrid-section {
    > td, .fc-scroller-harness-liquid {
        border-radius: 30px;
    }

    .fc-daygrid-body {
      background: #23242a;
    }
  }

  .fc .fc-scrollgrid-liquid {
    border: none;
    
    tbody .fc-day-sat, tbody .fc-day-sun {
      background-color: #1e1f25;
    }

    a {
      color: #848492;
    }

    .fc-highlight {
      background-image: linear-gradient(43deg,#4158D0 0%,#C850C0 46% 100%);
    }

    .fc-daygrid-day-events {
      position: absolute;
      bottom: 5px;
    }

    th {
      // background-color: #1a1c20;
      border: none;
    }
  }
`

interface CalendarPostingProp {
  onDateClick: (postId: string) => void
}

const CalendarPosting = ({onDateClick}: CalendarPostingProp) => {
  const { isLoading, isFetching } = postApi.endpoints.getAllPostSchedule.useQuery(null, {
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  const loading = isLoading || isFetching;

  const events = postApi.endpoints.getAllPostSchedule.useQueryState(null, {
    selectFromResult: ({ data }) => {
      return data;
    }
  });

  const onDateClicked = (e: DateClickArg) => {
    if(events) {
      var postIdSelected = events.filter((_: any) => _.date === e.dateStr)[0]?.id || null;

      onDateClick(postIdSelected);
    }
  }


  return (
    <CalendarPostingStyled>
      <TitleStyled fontSize="20px" padding="20px 0">
        September
      </TitleStyled>

      <FullCalendarWrapperStyled>
      {
        isLoading ?
        <p>..Loading..</p> :
        <FullCalendarStyled
          plugins={[interactionPlugin, dayGridPlugin]}
          selectable={true}
          firstDay={1}
          initialView="dayGridMonth"
          aspectRatio={2}
          dateClick={(e: DateClickArg) => onDateClicked(e)}
          events={events}
          eventContent={renderEventContent} />
      }
      </FullCalendarWrapperStyled>
      
    </CalendarPostingStyled>
  );
};

export default CalendarPosting;


function renderEventContent(eventInfo: any) {
  return (
    <>
      <div>
        <ListThumbnails 
          images={eventInfo.event.extendedProps.images}
          width="60px"
          height="40px"
          borderRadius="15px" />
      </div>
    </>
  )
}