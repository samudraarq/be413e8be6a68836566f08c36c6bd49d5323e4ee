import styled from "styled-components";
import LunchDinnerSelect from "./LunchDinnerSelect";

const Wrapper = styled.div`
  position: absolute;
  top: 8.8rem;
  z-index: 5;
  width: 100%;
  background: #fff;
`;

const LunchDinner = () => {
  return (
    <Wrapper>
      <LunchDinnerSelect />
    </Wrapper>
  );
};

export default LunchDinner;
