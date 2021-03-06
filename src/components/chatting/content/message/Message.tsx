import React, { useState, useEffect, useReducer } from "react";
import styled from "styled-components";

import { Text, TextWrapper } from "@/components/chatting/content/message/Text";

import { chattingReducer } from "@/reducers/chattingReducer";

import type { Message as MessageType } from "@/types/chatting";

type Props = {
  playerName: string;
  color: string;
};

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

const dummyMessage: MessageType[] = [
  { playerName: "일이삼", text: "안녕하세요" },
  { playerName: "일이삼사", text: "안녕하세요~" },
  {
    playerName: "일이삼사오륙칠팔",
    text:
      "여름 장이란 애시당초에 글러서, 해는 아직 중천에 있건만 장판은 벌써 쓸쓸하고 더운 햇발이 벌여놓은 전 휘장 밑으로 등줄기를 훅훅 볶는다. 마을 사람들은 거의 돌아간 뒤요, 팔리지 못한 나무꾼패가 길거리에 궁깃거리고들 있으나, 석유병이나 받고 고깃마리",
  },
];

export const Message = ({ playerName, color }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(chattingReducer, { messages: [] });

  useEffect(() => {
    dispatch({ type: "init", payload: dummyMessage });
  }, []);

  return (
    <Wrapper>
      {state.messages.map((message, index) => {
        return (
          <TextWrapper key={index}>
            <Text color={color}>{message.playerName}</Text> :{" "}
            <Text>{message.text}</Text>
          </TextWrapper>
        );
      })}
    </Wrapper>
  );
};

export default Message;
