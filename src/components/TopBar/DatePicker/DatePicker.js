import styled from "styled-components";
import { subDays, format, addDays, isSameDay, isWeekend } from "date-fns";
import { id } from "date-fns/locale";
import { useState } from "react";

const Wrapper = styled.div`
  border-bottom: 1px solid #f1f1f2;
`;

const DateWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 0.8rem repeat(14, calc(15% - 0.4rem)) 0.8rem;
  overflow-x: auto;
  scroll-snap-type: x proximity;
  margin: 0.4rem 0;

  &::before,
  &::after {
    content: "";
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export const DateItemsWrapper = styled.div`
  display: flex;
  scroll-snap-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.selected && "#424749"};
  color: ${(props) =>
    props.selected ? "#ffffff" : props.weekend && "#e2e4e4"};
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  cursor: pointer;
`;

const DateItem = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentWeek = new Date();

  const enableDays = 14;

  const _verticalList = () => {
    const _dayFormat = "E";
    const _dateFormat = "dd";
    const _verticalListItems = [];
    const _startDay = subDays(currentWeek, 0);

    for (let i = 0; i < enableDays; i++) {
      let _day = format(addDays(_startDay, i), _dayFormat, { locale: id });
      let _date = format(addDays(_startDay, i), _dateFormat, { locale: id });

      _verticalListItems.push(
        isWeekend(addDays(_startDay, i)) ? (
          <DateItemsWrapper weekend key={i}>
            <div>{_day}</div>
            <DateItem>{_date}</DateItem>
          </DateItemsWrapper>
        ) : (
          <DateItemsWrapper
            onClick={() => onDateClick(addDays(_startDay, i))}
            selected={isSameDay(addDays(_startDay, i), selectedDate)}
            key={i}
          >
            <div>{_day}</div>
            <DateItem>{_date}</DateItem>
          </DateItemsWrapper>
        )
      );
    }

    return _verticalListItems;
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <Wrapper>
      <DateWrapper>{_verticalList()}</DateWrapper>
    </Wrapper>
  );
};

export default DatePicker;
