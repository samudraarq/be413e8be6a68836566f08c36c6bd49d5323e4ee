import styled from "styled-components";
import AddToCartModal from "./components/AddToCartModal/AddToCartModal";
import CartContextProvider from "./components/Context/CartContext";
import { LocationSearchModal } from "./components/LocationSearchModal/LocationSearchModal";
import LunchDinner from "./components/LunchDinnerSelect/LunchDinner";
import MenuCards from "./components/MenuCards/MenuCards";
import TopBar from "./components/TopBar/TopBar";

const MobileSize = styled.div`
  max-width: 37.5rem;
  margin: auto;
  background: #f1f1f2;
  height: 100vh;
  /* overflow: hidden; */
`;

function App() {
  return (
    <CartContextProvider>
      <MobileSize>
        <TopBar />
        <LunchDinner />
        <MenuCards />
        <AddToCartModal />
        <LocationSearchModal />
      </MobileSize>
    </CartContextProvider>
  );
}

export default App;
