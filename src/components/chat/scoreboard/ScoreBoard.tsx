import React from "react";
import styled from "styled-components";

const SIZE = {
  WIDTH: 525,
  HEIGHT: 776,
  BORDER_RADIUS: 20,
};

const Wrapper = styled.div`
  margin: 0px;

  width: ${SIZE.WIDTH}px;
  height: ${SIZE.HEIGHT}px;

  border-radius: ${SIZE.BORDER_RADIUS}px;
`;

export const Content = () => {
  return <Wrapper></Wrapper>;
};

export default Content;
