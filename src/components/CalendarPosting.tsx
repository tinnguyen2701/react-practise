import { TitleStyled } from "./TitleStyled";
import { BadgeProps, ConfigProvider } from 'antd';
import { Badge, Calendar } from 'antd';
import React from 'react';
import en_GB from 'antd/lib/locale-provider/en_GB';
import moment, { Moment } from 'moment';
import 'moment/locale/en-gb';
moment.locale('en-gb');
moment.updateLocale('en-gb', {
  weekdaysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
});

const getListData = (value: Moment) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
};

const CalendarPosting = () => {
  const dateCellRender = (value: Moment) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps['status']} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <TitleStyled>
        September
      </TitleStyled>

      <ConfigProvider locale={en_GB}>
        <Calendar
          className="hideHeader"
          dateCellRender={dateCellRender}
        />
      </ConfigProvider>
    </>
  );
};

export default CalendarPosting;
