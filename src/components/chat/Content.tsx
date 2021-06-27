import React from "react";
import styled from "styled-components";

const BORDER = {
  RADIUS: 25,
};

const Wrapper = styled.div`
  margin: 0px;

  width: 525px;
  height: 776px;

  background: #ffffff;

  border-bottom-left-radius: ${BORDER.RADIUS}px;
  border-bottom-right-radius: ${BORDER.RADIUS}px;
`;

export const Content = () => {
  return <Wrapper></Wrapper>;
};

export default Content;
