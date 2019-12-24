import React from "react";
import styled from "styled-components";

type AnnouncementProps = {
  winner: string;
  onStart: () => void;
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem;
  text-align: center;
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem 0 0;
  min-width: 5rem;
  text-decoration: none;
  background-color: #0069ed;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover,
  &:focus {
    background-color: #0053ba;
  }

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.99);
  }
`;

const P = styled.p`
  margin-bottom: 0.75rem;
`;

const H1 = styled.h1`
  margin: 0.75rem 0;
`;

export const Announcement = ({ winner, onStart }: AnnouncementProps) => {
  const integrants = JSON.parse(window.localStorage.getItem("Integrants"));

  return (
    <Wrapper>
      {winner === "tie" ? (
        <P>Tie Game</P>
      ) : (
        <div>
          <P>Congrats</P>
          <H1>
            {winner === "X"
              ? `The winner is ${integrants.numberOne}`
              : `The winner is ${integrants.numberTwo}`}
          </H1>
        </div>
      )}

      <Button onClick={onStart}>Start</Button>
    </Wrapper>
  );
};
