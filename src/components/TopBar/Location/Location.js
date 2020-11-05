import styled from "styled-components";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Container from "../../UI/Container";

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 10% 1fr;
  margin-top: 0.8rem;
  cursor: pointer;
`;

const LocationTitle = styled.p`
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 300;
`;

const LocationSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 0.4rem;
`;

const LocationSelect = styled.p`
  font-size: 1.6rem;
`;

const Location = () => {
  return (
    <Container>
      <Wrapper>
        <KeyboardBackspaceIcon style={{ fontSize: "2rem" }} />
        <div>
          <LocationTitle>Alamat pengantaran</LocationTitle>
          <LocationSelectWrapper>
            <LocationSelect>Tokopedia Tower</LocationSelect>
            <ExpandMoreIcon style={{ color: "#f9423a", fontSize: "1.6rem" }} />
          </LocationSelectWrapper>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Location;
