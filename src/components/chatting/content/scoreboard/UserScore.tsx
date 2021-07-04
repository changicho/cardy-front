import React from "react";
import styled from "styled-components";

type Props = {
  playerName: string;
  score: number;
  color: string;
};

const SIZE = {
  WIDTH: 90,
  HEIGHT: 67,
};

const FONT = {
  SIZE: 18,
};

const Wrapper = styled.div`
  margin: 0px;
  margin: 10px;

  width: ${SIZE.WIDTH}px;
  height: ${SIZE.HEIGHT}px;
`;

const UserName = styled.div`
  width: ${SIZE.WIDTH}px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserNameText = styled.span`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: ${FONT.SIZE}px;

  display: flex;
  text-align: center;

  color: ${(props) => props.color};
`;

const Score = styled.div`
  width: 100%;
  height: 30px;
  background: #ffffff;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScoreText = styled.p<{ color: string }>`
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  color: ${(props) => props.color};
`;

export const UserScore = ({ playerName, score, color }: Props): JSX.Element => {
  return (
    <Wrapper>
      <UserName>
        <UserNameText color={color}>{playerName}</UserNameText>
      </UserName>
      <Score>
        <ScoreText color={color}>{score}</ScoreText>
      </Score>
    </Wrapper>
  );
};

export default UserScore;
