import { useEffect, useState } from "react";
import styled from "styled-components";
import LunchDinnerSelect from "./LunchDinnerSelect";

const Wrapper = styled.div`
  position: fixed;
  top: 8.8rem;
  z-index: 5;
  left: 50%;
  max-width: 37.5rem;
  width: 100vw;
  background: #fff;
  transform: ${(props) =>
    props.downScroll ? "translate(-50%, 0)" : "translate(-50%, -100%)"};
  transition: all 0.5s ease;
`;

const LunchDinner = () => {
  const [lastScroll, setLastScroll] = useState(0);
  const [downScroll, setDownScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      var st = window.scrollY;
      if (st > lastScroll || st <= 0) {
        setDownScroll(true);
      } else {
        setDownScroll(false);
      }
      setLastScroll(st);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <Wrapper downScroll={downScroll}>
      <LunchDinnerSelect />
    </Wrapper>
  );
};

export default LunchDinner;
