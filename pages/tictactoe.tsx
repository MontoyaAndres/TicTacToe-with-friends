import React, { useReducer, useCallback, useEffect } from "react";
import styled from "styled-components";
import Router from "next/router";
import dynamic from "next/dynamic";

import { calculateWinner } from "../utils/calculateWinner";
import { Board } from "../components/Board";
import { Announcement } from "../components/Announcement";

const DynamicMessage = dynamic(() => import("../components/Message"), {
  ssr: false
});

interface IDefaultState {
  squares: Array<string | null>;
  isXNext: boolean;
  winner: string;
}

interface IAction {
  type: string;
  idx?: number;
}

const defaultState = {
  squares: Array(9).fill(null),
  isXNext: true,
  winner: ""
};

const reducer = (state: IDefaultState, action: IAction) => {
  switch (action.type) {
    case "start":
      return defaultState;

    case "handleClick":
      const moves = [...state.squares];
      moves[action.idx] = state.isXNext ? "X" : "O";

      return {
        squares: moves,
        isXNext: !state.isXNext,
        winner: calculateWinner(moves)
      };

    default:
      return state;
  }
};

const Game = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  margin-top: 1rem;
  background-color: white;
  color: black;
  font-size: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  width: 20%;

  &:hover {
    cursor: pointer;
  }
`;

const index = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    const integrants = window.localStorage.getItem("Integrants");

    if (!integrants) {
      Router.push({
        pathname: "/team"
      });
    }
  }, []);

  const handleClick = useCallback(
    (index: number) => {
      dispatch({ type: "handleClick", idx: index });
    },
    [dispatch]
  );

  const handleStart = useCallback(() => {
    dispatch({ type: "start" });
  }, [dispatch]);

  const handleExit = () => {
    window.localStorage.removeItem("Inttegrants");

    Router.push({
      pathname: "/team"
    });
  };

  return (
    <Game>
      <Board squares={state.squares} onClick={handleClick} />
      <DynamicMessage
        hasStarted={state.squares.some(s => s)}
        isXNext={state.isXNext}
      />
      <Button onClick={handleExit}>Exit</Button>
      {!!state.winner && (
        <Announcement winner={state.winner} onStart={handleStart} />
      )}
    </Game>
  );
};

export default index;
