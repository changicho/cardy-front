import React from "react";
import styled from "styled-components";

import Chatting from "@/components/chatting/Chatting";

const Wrapper = styled.div`
  margin: 0px;
  padding: 0px;

  width: 100vw;
  height: 100vh;

  background: #7894ff;
`;

export const Base = (): JSX.Element => {
  return (
    <Wrapper>
      <Chatting />
    </Wrapper>
  );
};

export default Base;
