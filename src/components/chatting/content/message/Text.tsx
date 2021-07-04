import styled from "styled-components";

export const TextWrapper = styled.div`
  margin: 5px 0px;
`;

export const Text = styled.span<{ color?: string }>`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;

  color: ${(props) => props.color || "#2A3459"};
`;

export default Text;
