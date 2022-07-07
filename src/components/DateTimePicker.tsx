import { DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import React from 'react';
import styled from "styled-components";
import { DescriptionStyled } from './PostDetail';



const DateTimePickerStyled = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    color: white;

    .dot {
        font-size: 25px;
        padding: 0 10px;
    }
`
export interface DateTimePickerProps {
    day: string,
    time: string
}

const dateFormat = 'YYYY/MM/DD';
const timeFormat = 'hh:mm';

export const DateTimePicker = React.memo(({day, time}: DateTimePickerProps) => {

    return (
        <DateTimePickerStyled>
            <DescriptionStyled style={{borderRadius: "25px"}}>
                <DatePicker 
                    className="date-picker" 
                    size="middle"
                    defaultValue={moment(day, dateFormat)} 
                    format={dateFormat} />
            </DescriptionStyled>
            <span className="dot">&bull;</span>
            <DescriptionStyled style={{borderRadius: "25px"}}>
                <TimePicker 
                    className="time-picker"
                    defaultValue={moment(time, timeFormat)}  />
            </DescriptionStyled>
        </DateTimePickerStyled>
    )})

export default DateTimePicker;