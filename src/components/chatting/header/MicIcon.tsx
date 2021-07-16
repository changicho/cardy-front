import styled from "styled-components";

import micIconImage from "@/assets/image/mic.png";
import muteIconImage from "@/assets/image/mute.png";

export const MicIcon = styled.div`
  margin: 0px;
  padding: 0px;
  width: 40px;
  height: 40px;

  background-color: transparent;
  background-image: url(${micIconImage});
`;

export const MuteIcon = styled.div`
  margin: 0px;
  padding: 0px;
  width: 40px;
  height: 40px;

  background-color: transparent;
  background-image: url(${muteIconImage});
`;
