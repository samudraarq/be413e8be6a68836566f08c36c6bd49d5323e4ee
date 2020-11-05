import styled from "styled-components";

import CloseIcon from "@material-ui/icons/Close";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  max-width: 37.5rem;
  width: 100vw;
  height: 100vh;
  transform: translateX(-50%);
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.div`
  background: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80vh;
  border-radius: 0.8rem 0.8rem 0 0;
  padding: 0.8rem 1.2rem;
`;

const CloseIconWrapper = styled.div`
  & svg {
    font-size: 4rem;
    display: block;
    margin-left: auto;
  }
`;

const Title = styled.p`
  font-size: 2rem;
  margin-top: 1.6rem;
`;

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

export const LocationSearchModal = () => {
  return (
    <Wrapper>
      <ModalWrapper>
        <CloseIconWrapper>
          <CloseIcon />
        </CloseIconWrapper>
        <Title>Cek makanan yang tersedia di lokasi kamu!</Title>
        <InputWrapper>
          <LocationOnIcon />
          <Input />
        </InputWrapper>
      </ModalWrapper>
    </Wrapper>
  );
};
