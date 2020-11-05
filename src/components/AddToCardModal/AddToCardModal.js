import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 1) 100%
  );
`;

const ModalWrapper = styled.div`
  background: #f9423a;
  color: #fff;
  margin: 1.2rem;
  padding: 1.2rem;
  border-radius: 0.4rem;
`;

const AddToCardModal = () => {
  return (
    <Wrapper>
      <ModalWrapper>5 Items | Rp 125000</ModalWrapper>
    </Wrapper>
  );
};

export default AddToCardModal;
