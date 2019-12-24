import React, { useState } from "react";
import styled from "styled-components";
import Router from "next/router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;

  @media (min-width: 768px) {
    margin: 0 3rem;
  }

  @media (min-width: 1024px) {
    margin: 0 10rem;
  }
`;

const Integrant = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  padding-bottom: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 1rem;
  background-color: black;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
`;

const team = () => {
  const [integrant, setIntegrant] = useState({ numberOne: "", numberTwo: "" });

  function handlePlay() {
    window.localStorage.setItem("Integrants", JSON.stringify(integrant));

    Router.push({
      pathname: "/tictactoe"
    });
  }

  return (
    <Wrapper>
      <Integrant>
        <Label htmlFor="number1">Integrant number one is X:</Label>
        <Input
          id="number1"
          type="text"
          placeholder="Enter the nickname"
          value={integrant.numberOne}
          onChange={e =>
            setIntegrant({
              numberOne: e.target.value,
              numberTwo: integrant.numberTwo
            })
          }
        />
      </Integrant>

      <Integrant>
        <Label htmlFor="number2">Integrant number two is O:</Label>
        <Input
          id="number2"
          type="text"
          placeholder="Enter the nickname"
          value={integrant.numberTwo}
          onChange={e =>
            setIntegrant({
              numberOne: integrant.numberOne,
              numberTwo: e.target.value
            })
          }
        />
      </Integrant>

      <Integrant>
        <Button onClick={handlePlay}>Let's go!</Button>
      </Integrant>
    </Wrapper>
  );
};

export default team;
