import styled from "styled-components";
import { subDays, format, addDays } from "date-fns";
import { useState } from "react";

const Wrapper = styled.div`
  border-bottom: 1px solid #f1f1f2;
`;

const DateWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(14, calc(15% - 0.4rem));
  overflow-x: auto;
  justify-items: center;
  padding: 0 0.8rem;
`;

const DateItemsWrapper = styled.div`
  text-align: center;
`;

const DatePicker = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [currentDate] = useState(new Date());

  const enableDays = 14;

  const _verticalList = () => {
    const _dayFormat = "E";
    const _dateFormat = "dd";
    const _verticalListItems = [];
    const _startDay = subDays(currentWeek, 1);

    for (let i = 0; i < enableDays; i++) {
      let _day = format(addDays(_startDay, i), _dayFormat);
      let _date = format(addDays(_startDay, i), _dateFormat);

      _verticalListItems.push(
        <DateItemsWrapper>
          <div className="datepicker-day-label ">{_day}</div>
          <div className="datepicker-date-label ripple ">{_date}</div>
        </DateItemsWrapper>
      );
    }

    return _verticalListItems;
  };

  return (
    <Wrapper>
      <DateWrapper>{_verticalList()}</DateWrapper>
    </Wrapper>
  );
};

export default DatePicker;
