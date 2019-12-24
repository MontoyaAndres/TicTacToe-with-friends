import React from "react";
import styled from "styled-components";

import { Square } from "./Square";

type BoardProps = {
  squares: Array<string | null>;
  onClick: (index: number) => void;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const Board = ({ squares, onClick }: BoardProps) => {
  return (
    <Wrapper>
      {squares.map((square, i) => (
        <Square key={i} index={i} value={square} onClick={onClick} />
      ))}
    </Wrapper>
  );
};
