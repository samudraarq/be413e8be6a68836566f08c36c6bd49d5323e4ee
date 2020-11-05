import styled from "styled-components";
import AddToCardModal from "./components/AddToCardModal/AddToCardModal";
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
    <MobileSize>
      <TopBar />
      <LunchDinner />
      <MenuCards />
      <AddToCardModal />
    </MobileSize>
  );
}

export default App;
