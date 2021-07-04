import React from "react";
import styled from "styled-components";

import Header from "@/components/chatting/header/Header";
import Content from "@/components/chatting/content/Content";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25));
`;

export const Chat = (): JSX.Element => {
  return (
    <Wrapper>
      <Header title={"test title"} />
      <Content />
    </Wrapper>
  );
};

export default Chat;
