import { useContext } from "react";

import styled from "styled-components";

import CloseIcon from "@material-ui/icons/Close";
import LocationInput from "./LocationInput/LocationInput";
import SearchResult from "./SearchResult/SearchResult";
import { LocationContext } from "../Context/LocationContext";

import poweredByGoogle from "../../assets/powered_by_google_on_white.png";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  max-width: 37.5rem;
  width: 100vw;
  height: 100vh;
  transform: translateX(-50%);
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);

  opacity: ${(props) => (props.modalOpen ? "1" : "0")};
  visibility: ${(props) => (props.modalOpen ? "visible" : "hidden")};
`;

const ModalWrapper = styled.div`
  background: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80vh;
  border-radius: 0.8rem 0.8rem 0 0;
  padding: 0.8rem 1.2rem;

  transform: ${(props) =>
    props.modalOpen ? "translateY(0)" : "translateY(100%)"};

  transition: all 0.5s ease-in-out;
`;

const CloseIconWrapper = styled.div`
  & svg {
    font-size: 4rem;
    display: block;
    margin-left: auto;
    cursor: pointer;
  }
`;

const Title = styled.p`
  font-size: 2rem;
  margin-top: 1.6rem;
`;

const SearchResultWrapper = styled.div`
  margin-top: 2.4rem;
`;

const GoogleLogo = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const LocationSearchModal = () => {
  const { data, setModalOpen, modalOpen } = useContext(LocationContext);

  const renderResult = data.map((place) => (
    <SearchResult key={place.id} place={place} />
  ));

  return (
    <Wrapper modalOpen={modalOpen}>
      <ModalWrapper modalOpen={modalOpen}>
        <CloseIconWrapper>
          <CloseIcon onClick={() => setModalOpen(false)} />
        </CloseIconWrapper>
        <Title>Cek makanan yang tersedia di lokasi kamu!</Title>
        <LocationInput />
        <SearchResultWrapper>{renderResult}</SearchResultWrapper>
        <GoogleLogo src={poweredByGoogle} alt="google" />
      </ModalWrapper>
    </Wrapper>
  );
};
