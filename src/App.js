import styled from "styled-components";
import LunchDinner from "./components/LunchDinnerSelect/LunchDinner";
import TopBar from "./components/TopBar/TopBar";

const MobileSize = styled.div`
  max-width: 37.5rem;
  margin: auto;
`;

function App() {
  return (
    <MobileSize>
      <TopBar />
      <LunchDinner />
    </MobileSize>
  );
}

export default App;
