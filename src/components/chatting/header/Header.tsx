import React, { useState } from "react";
import styled from "styled-components";

import Title from "@/components/chatting/header/Title";
import { MicIcon, MuteIcon } from "@/components/chatting/header/MicIcon";

type Props = {
  title: string;
};

const SIZE = {
  WIDTH: 525,
  HEIGHT: 75,
  BORDER_RADIUS: 25,
};

const PADDING = {
  HORIZONTAL: 21,
  VERTICAL: 28,
};

const Wrapper = styled.div`
  margin: 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  width: ${SIZE.WIDTH - 2 * PADDING.HORIZONTAL}px;
  height: ${SIZE.HEIGHT - 2 * PADDING.VERTICAL}px;
  background: #d7dfff;

  padding: ${PADDING.VERTICAL}px ${PADDING.HORIZONTAL}px;

  border-top-left-radius: ${SIZE.BORDER_RADIUS}px;
  border-top-right-radius: ${SIZE.BORDER_RADIUS}px;
`;

export const Header = ({ title }: Props): JSX.Element => {
  const [canSpeak, setCanSpeak] = useState<boolean>(true);

  return (
    <Wrapper>
      <Title PADDING={PADDING}>{title}</Title>
      {canSpeak ? <MicIcon /> : <MuteIcon />}
    </Wrapper>
  );
};

export default Header;
