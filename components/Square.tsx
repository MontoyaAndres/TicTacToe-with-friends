import React, { memo } from "react";
import styled from "styled-components";

type SquareProps = {
  value: string;
  onClick: (index: number) => void;
  index: number;
};

const Button = styled.button`
  background-color: white;
  border: 1px solid #999;
  float: left;
  font-size: 56px;
  font-weight: bold;
  width: 75px;
  height: 75px;
  line-height: 75px;
  padding: 0;
  text-align: center;

  &:focus {
    /* Prevent items from overlapping the outline */
    position: relative;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Square = memo(({ value, onClick, index }: SquareProps) => {
  return <Button onClick={() => onClick(index)}>{value}</Button>;
});
