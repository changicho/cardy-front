import React from "react";
import styled from "styled-components";

const BORDER = {
  RADIUS: 25,
};

const SIZE = {
  WIDTH: 90,
  HEIGHT: 67,
};

const Wrapper = styled.div`
  margin: 0px;

  width: ${SIZE.WIDTH}px;
  height: ${SIZE.HEIGHT}px;
`;

export const Content = () => {
  return <Wrapper></Wrapper>;
};

export default Content;
