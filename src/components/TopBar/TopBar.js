import styled from "styled-components";
import DatePicker from "./DatePicker/DatePicker";
import Location from "./Location/Location";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: #fff;
`;

const TopBar = () => {
  return (
    <Wrapper>
      <Location />
      <DatePicker />
    </Wrapper>
  );
};

export default TopBar;
