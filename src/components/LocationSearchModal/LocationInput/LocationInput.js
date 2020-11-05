import styled from "styled-components";

import LocationOnIcon from "@material-ui/icons/LocationOn";

const InputWrapper = styled.div`
  position: relative;
  margin-top: 1.6rem;

  & svg {
    color: #f9423a;
    font-size: 2rem;
    position: absolute;
    left: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Input = styled.input`
  border-radius: 0.4rem;
  border: 1px solid #f1f1f2;
  outline: none;
  width: 100%;
  height: 4rem;
  padding-left: 4.8rem;
  padding-right: 1.2rem;
`;

const LocationInput = () => {
  return (
    <InputWrapper>
      <LocationOnIcon />
      <Input />
    </InputWrapper>
  );
};

export default LocationInput;
