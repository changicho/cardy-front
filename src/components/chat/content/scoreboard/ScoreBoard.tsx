import React, { useEffect, useState } from "react";
import styled from "styled-components";

import UserScore from "@/components/chat/content/scoreboard/UserScore";
import {
  RED,
  PINK,
  ORANGE,
  YELLOW,
  GREEN,
  CYAN,
  BLUE,
  PURPLE,
} from "@/constants/colors";

const colors = [RED, PINK, ORANGE, YELLOW, GREEN, CYAN, BLUE, PURPLE];

const SIZE = {
  WIDTH: 450,
  HEIGHT: 208,
  BORDER_RADIUS: 30,
};

const Wrapper = styled.div`
  margin: 0px;

  width: ${SIZE.WIDTH}px;
  height: ${SIZE.HEIGHT}px;

  border-radius: ${SIZE.BORDER_RADIUS}px;

  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */

  background: #ededed;
  border-radius: ${SIZE.BORDER_RADIUS}px;
`;

type Score = {
  userName: string;
  score: number;
};

const dummyData = [
  { userName: "hello", score: 10 },
  { userName: "hello", score: 10 },
  { userName: "hello", score: 10 },
  { userName: "hello", score: 10 },
  { userName: "hello", score: 10 },
  { userName: "hello", score: 10 },
  { userName: "hello", score: 10 },
];

export const Content = (): JSX.Element => {
  const [data, setData] = useState<Score[]>([]);

  useEffect(() => {
    setData(dummyData);
  }, []);

  return (
    <Wrapper>
      {data.map((cur, index) => (
        <UserScore
          key={index}
          userName={cur.userName}
          score={cur.score}
          color={colors[index]}
        />
      ))}
    </Wrapper>
  );
};

export default Content;
