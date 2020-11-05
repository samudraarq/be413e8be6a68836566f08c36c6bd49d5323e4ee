import styled from "styled-components";
import LunchDinnerSelect from "./LunchDinnerSelect";

const Wrapper = styled.div`
  position: absolute;
  top: 8.9rem;
  width: 100%;
`;

const LunchDinner = () => {
  return (
    <Wrapper>
      <LunchDinnerSelect />
    </Wrapper>
  );
};

export default LunchDinner;
