import styled from "styled-components";

import LocationOnIcon from "@material-ui/icons/LocationOn";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 4.8rem 1fr;
  align-items: center;
  margin-top: 1.6rem;
`;

const IconWrapper = styled.div`
  background: #f1f1f2;
  justify-self: center;

  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 1.6rem;

  & svg {
    color: #e2e4e4;
    font-size: 2rem;
  }
`;

const ContentWrapper = styled.div`
  border-bottom: 1px solid #f1f1f2;
  padding-bottom: 1.6rem;
`;

const Location = styled.p`
  font-size: 1.6rem;
`;

const Address = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  margin-top: 0.8rem;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  height: 1.6rem;
  overflow: hidden;
`;

const SearchResult = ({ place }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <LocationOnIcon />
      </IconWrapper>
      <ContentWrapper>
        <Location>{place.name}</Location>
        <Address>{place.address}</Address>
      </ContentWrapper>
    </Wrapper>
  );
};

export default SearchResult;
