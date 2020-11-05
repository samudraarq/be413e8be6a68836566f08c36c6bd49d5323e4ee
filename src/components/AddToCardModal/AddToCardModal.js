import styled from "styled-components";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

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
  background: #a23530;
  color: #fff;
  margin: 1.2rem;
  padding: 1.2rem;
  border-radius: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemPrice = styled.div`
  font-size: 1.4rem;
`;
const DeliveryPrice = styled.p`
  font-size: 1.2rem;
  margin-top: 0.4rem;
`;

const IconWrapper = styled.div`
  & svg {
    font-size: 2.4rem;
  }
`;

const AddToCardModal = () => {
  return (
    <Wrapper>
      <ModalWrapper>
        <div>
          <ItemPrice>5 Items | Rp 125000</ItemPrice>
          <DeliveryPrice>Termasuk ongkos kirim</DeliveryPrice>
        </div>
        <IconWrapper>
          <ShoppingCartIcon />
          <NavigateNextIcon />
        </IconWrapper>
      </ModalWrapper>
    </Wrapper>
  );
};

export default AddToCardModal;
