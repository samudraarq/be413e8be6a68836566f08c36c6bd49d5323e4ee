import styled from "styled-components";
import LunchDinnerSelect from "./components/LunchDinnerSelect/LunchDinnerSelect";
import TopBar from "./components/TopBar/TopBar";

const MobileSize = styled.div`
  max-width: 37.5rem;
  margin: auto;
`;

function App() {
  return (
    <MobileSize>
      <TopBar />
      <LunchDinnerSelect />
    </MobileSize>
  );
}

export default App;
