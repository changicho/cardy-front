import React from "react";
import styled from "styled-components";

import ScoreBoard from "@/components/chat/content/scoreboard/ScoreBoard";

const BORDER = {
  RADIUS: 25,
};

const SIZE = {
  WIDTH: 525,
  HEIGHT: 776,
};

const PADDING = {
  WIDTH: 30,
  HEIGHT: 20,
};

const Wrapper = styled.div`
  margin: 0px;

  width: ${SIZE.WIDTH - 2 * PADDING.WIDTH}px;
  height: ${SIZE.HEIGHT - 2 * PADDING.HEIGHT}px;

  padding: ${PADDING.HEIGHT}px ${PADDING.WIDTH}px;

  background: #ffffff;

  border-bottom-left-radius: ${BORDER.RADIUS}px;
  border-bottom-right-radius: ${BORDER.RADIUS}px;
`;

export const Content = (): JSX.Element => {
  return (
    <Wrapper>
      <ScoreBoard />
    </Wrapper>
  );
};

export default Content;
