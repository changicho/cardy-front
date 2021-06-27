import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
};

const FONT = {
  SIZE: 24,
  LINE_HEIGHT: 24,
};

const PADDING = {
  HORIZONTAL: 21,
  VERTICAL: 28,
};

const BORDER = {
  RADIUS: 25,
};

const Wrapper = styled.div`
  margin: 0px;

  width: 525px;
  height: 75px;
  background: #d7dfff;

  border-top-left-radius: ${BORDER.RADIUS}px;
  border-top-right-radius: ${BORDER.RADIUS}px;
`;

const Text = styled.h1`
  margin: 0px;

  width: calc(100% - ${2 * PADDING.HORIZONTAL}px);
  height: calc(100% - ${2 * PADDING.VERTICAL}px);

  padding: ${PADDING.VERTICAL}px ${PADDING.HORIZONTAL}px;

  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: ${FONT.SIZE}px;
  line-height: ${FONT.LINE_HEIGHT}px;
`;

export const Title = ({ title }: Props) => {
  return (
    <Wrapper>
      <Text>{title}</Text>
    </Wrapper>
  );
};

export default Title;
