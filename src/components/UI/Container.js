import styled from "styled-components";

const ContainerWrapper = styled.div`
  padding: 0 0.8rem;
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
