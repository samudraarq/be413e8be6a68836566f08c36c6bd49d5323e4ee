import styled from "styled-components";

const ContainerWrapper = styled.div`
  padding: 0 1.6rem;
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
