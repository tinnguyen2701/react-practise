import { TitleStyled } from "./TitleStyled";
import { BadgeProps, ConfigProvider } from 'antd';
import { Badge, Calendar } from 'antd';
import React from 'react';
import en_GB from 'antd/lib/locale-provider/en_GB';
import moment, { Moment } from 'moment';
import 'moment/locale/en-gb';
import { userApi } from "../redux/apis";
import { useGetPostScheduleByDatetimeQuery } from "../redux/apis/postApi";
import ListThumbnails from "./ListThumbnails";

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

    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const {data, isLoading, isSuccess} = useGetPostScheduleByDatetimeQuery(
    //   {
    //     day: value.date(),
    //     month: value.month(),
    //     year: value.year()
    //   }, {
    //   skip: false,
    //   refetchOnMountOrArgChange: true
    // });
    var data = null;
    var isLoading = true;
    var isSuccess = true;

    console.log("1");

    return (
      isLoading ? <p>..loading..</p> :
        isSuccess && data ? <ListThumbnails images={data} /> : <></>
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
