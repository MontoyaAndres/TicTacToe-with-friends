import React from "react";
import styled from "styled-components";

type MessageProps = {
  hasStarted: boolean;
  isXNext: boolean;
};

const Wrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const Message = ({ hasStarted, isXNext }: MessageProps) => {
  const integrants = JSON.parse(window.localStorage.getItem("Integrants"));

  return (
    <Wrapper>
      {isXNext
        ? `It's the turn of ${integrants.numberOne} with X`
        : `It's the turn of ${integrants.numberTwo} with O`}
    </Wrapper>
  );
};

export default Message;
