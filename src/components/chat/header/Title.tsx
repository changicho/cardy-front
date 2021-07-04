import styled from "styled-components";

const FONT = {
  SIZE: 24,
  LINE_HEIGHT: 24,
};

type Props = {
  PADDING: {
    HORIZONTAL: number;
  };
};

const Title = styled.h1<Props>`
  margin: 0px;

  width: calc(100% - ${(props) => props.PADDING.HORIZONTAL * 2}px);
  height: ${FONT.SIZE}px;

  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: ${FONT.SIZE}px;
`;

export default Title;
