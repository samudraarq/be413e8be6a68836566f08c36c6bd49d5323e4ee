import styled from "styled-components";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  max-width: 37.5rem;
  width: 100vw;
  z-index: 5;
  transform: ${(props) =>
    props.show ? "translate(-50%, 0)" : "translate(-50%, 100%)"};
  transition: all 0.5s ease;
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

const AddToCartModal = () => {
  const { cartAmount, totalPrice } = useContext(CartContext);

  const renderCartAmount = () => {
    const menuPrice = new Intl.NumberFormat("en-EN").format(totalPrice);
    let amount = "";
    if (cartAmount <= 1) {
      amount = "1 Item";
    } else {
      amount = cartAmount + " Items";
    }

    return (
      <ItemPrice>
        {amount} | Rp. {menuPrice}
      </ItemPrice>
    );
  };

  return (
    <Wrapper show={cartAmount >= 1}>
      <ModalWrapper>
        <div>
          {renderCartAmount()}
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

export default AddToCartModal;
