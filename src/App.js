import styled from "styled-components";
import AddToCardModal from "./components/AddToCardModal/AddToCardModal";
import CartContextProvider from "./components/Context/CartContext";
import LunchDinner from "./components/LunchDinnerSelect/LunchDinner";
import MenuCards from "./components/MenuCards/MenuCards";
import TopBar from "./components/TopBar/TopBar";

const MobileSize = styled.div`
  max-width: 37.5rem;
  margin: auto;
  background: #f1f1f2;
  position: relative;
  height: 100vh;
`;

function App() {
  return (
    <CartContextProvider>
      <MobileSize>
        <TopBar />
        <LunchDinner />
        <MenuCards />
        <AddToCardModal />
      </MobileSize>
    </CartContextProvider>
  );
}

export default App;
