import styled from "styled-components";
import DatePicker from "./DatePicker/DatePicker";
import Location from "./Location/Location";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  max-width: 37.5rem;
  width: 100vw;
  transform: translateX(-50%);
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
