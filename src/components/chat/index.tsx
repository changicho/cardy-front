import React from "react";
import styled from "styled-components";

import Title from "@/components/chat/Title";
import Content from "@/components/chat/Content";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25));
`;

export const Chat = () => {
  return (
    <Wrapper>
      <Title title={"test title"} />
      <Content />
    </Wrapper>
  );
};

export default Chat;
