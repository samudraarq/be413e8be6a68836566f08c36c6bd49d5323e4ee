import styled from "styled-components";
import LunchDinner from "./components/LunchDinnerSelect/LunchDinner";
import MenuCards from "./components/MenuCards/MenuCards";
import TopBar from "./components/TopBar/TopBar";

const MobileSize = styled.div`
  max-width: 37.5rem;
  margin: auto;
  background: #f1f1f2;
`;

function App() {
  return (
    <MobileSize>
      <TopBar />
      <LunchDinner />
      <MenuCards />
    </MobileSize>
  );
}

export default App;
