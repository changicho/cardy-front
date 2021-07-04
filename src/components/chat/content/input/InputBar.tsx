import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SIZE = {
  WIDTH: 465,
  HEIGHT: 60,
  BORDER_RADIUS: 30,
};

const PADDING = {
  HORIZONTAL: 10,
  VERTICAL: 10,
};

const Wrapper = styled.div`
  width: ${SIZE.WIDTH - 2 * PADDING.HORIZONTAL}px;
  height: ${SIZE.HEIGHT - 2 * PADDING.HORIZONTAL}px;

  border-radius: ${SIZE.BORDER_RADIUS}px;

  padding: ${PADDING.VERTICAL}px ${PADDING.HORIZONTAL}px;

  background: #ededed;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  width: ${SIZE.WIDTH - 40}px;
  margin: 0 10px;
  height: 25px;

  background: transparent;
  border: none;

  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;

  color: #999999;

  &:focus {
    border: none;
    outline: none;
  }
`;

const Button = styled.button`
  width: 35px;
  height: 35px;

  margin: 0 10px;

  background-color: black;
  border: none;
`;

export const InputBar = (): JSX.Element => {
  return (
    <Wrapper>
      <Input />
      <Button />
    </Wrapper>
  );
};

export default InputBar;
