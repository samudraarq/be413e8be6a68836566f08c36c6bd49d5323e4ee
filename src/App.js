import styled from "styled-components";
import TopBar from "./components/TopBar/TopBar";

const MobileSize = styled.div`
  max-width: 37.5rem;
  margin: auto;
`;

function App() {
  return (
    <MobileSize>
      <TopBar />
    </MobileSize>
  );
}

export default App;
