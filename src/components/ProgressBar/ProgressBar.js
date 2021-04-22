/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const WIDTH = 370;
const PADDING = 4;

const ProgressBar = ({ value, size }) => {
  const maxBarWidth = size === "large" ? WIDTH - PADDING * 2 : WIDTH;
  const barStyles = {
    "--width": (value / 100) * maxBarWidth + "px",
    "--height": { large: 24 - PADDING * 2, medium: 12, small: 8 }[size] + "px",
    "--borderRadius": value < 99 ? 0 : value < 100 ? "2px" : "4px",
  };
  return (
    <Wrapper
      size={size}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <Bar style={barStyles} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${WIDTH}px;
  padding: ${(p) => (p.size === "large" ? `${PADDING}px` : 0)};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: ${(p) => (p.size === "large" ? "8px" : "4px")};
`;

const Bar = styled.div`
  height: var(--height);
  width: var(--width);
  background-color: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: var(--borderRadius);
  border-bottom-right-radius: var(--borderRadius);
`;

export default ProgressBar;
