import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Text, TextWrapper } from "@/components/chat/content/message/Text";

const SIZE = {
  WIDTH: 525,
  HEIGHT: 450,
  BORDER_RADIUS: 25,

  MARGIN: {
    HEIGHT: 10,
  },
};

const PADDING = {
  HORIZONTAL: 21,
  VERTICAL: 28,
};

const Wrapper = styled.div`
  width: ${SIZE.WIDTH - 2 * PADDING.HORIZONTAL}px;
  height: ${SIZE.HEIGHT}px;

  margin: ${SIZE.MARGIN.HEIGHT}px 0;

  overflow-y: scroll;
  /* overflow-y: hidden; */
`;

type Message = {
  userName: string;
  text: string;
};

const dummyMessage: Message[] = [
  { userName: "일이삼", text: "안녕하세요" },
  { userName: "일이삼사", text: "안녕하세요~" },
  {
    userName: "일이삼사오륙칠팔",
    text:
      "여름 장이란 애시당초에 글러서, 해는 아직 중천에 있건만 장판은 벌써 쓸쓸하고 더운 햇발이 벌여놓은 전 휘장 밑으로 등줄기를 훅훅 볶는다. 마을 사람들은 거의 돌아간 뒤요, 팔리지 못한 나무꾼패가 길거리에 궁깃거리고들 있으나, 석유병이나 받고 고깃마리",
  },
];

export const Message = (): JSX.Element => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setMessages(dummyMessage);
  }, []);

  return (
    <Wrapper>
      {messages.map((message, index) => {
        return (
          <TextWrapper key={index}>
            <Text>{message.userName}</Text> : <Text>{message.text}</Text>
          </TextWrapper>
        );
      })}
    </Wrapper>
  );
};

export default Message;
