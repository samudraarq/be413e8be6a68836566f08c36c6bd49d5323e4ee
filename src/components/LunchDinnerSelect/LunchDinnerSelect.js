import styled from "styled-components";

import Container from "../UI/Container";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.8rem 0;
`;

const RadioBtn = styled.input`
  display: none;

  &:checked + label {
    background: #424749;
    color: #fff;
    border: 1px solid #424749;
  }
`;

const RadioBtnLabel = styled.label`
  border: 1px solid #e2e4e4;
  color: #e2e4e4;
  width: 50%;
  font-size: 1.2rem;
  text-align: center;
  padding: 0.8rem 0;

  &:first-of-type {
    border-radius: 0.4rem 0 0 0.4rem;
    border-right: none;
  }

  &:last-of-type {
    border-radius: 0 0.4rem 0.4rem 0;
    border-left: none;
  }
`;

const LunchDinnerSelect = () => {
  return (
    <Container>
      <Wrapper>
        <RadioBtn
          type="radio"
          name="time"
          id="lunch"
          value="lunch"
          defaultChecked
        />
        <RadioBtnLabel htmlFor="lunch">Lunch</RadioBtnLabel>
        <RadioBtn type="radio" name="time" id="dinner" value="dinner" />
        <RadioBtnLabel htmlFor="dinner">Dinner</RadioBtnLabel>
      </Wrapper>
    </Container>
  );
};

export default LunchDinnerSelect;
