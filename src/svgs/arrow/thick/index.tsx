import React, { FunctionComponent } from "react";
import { StyledArrowSVG } from "./styles";

const ThickArrowSVG: FunctionComponent = () => {
  return (
    <StyledArrowSVG
      width='100%'
      height='100%'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M21 5L24 8.057L12 20L0 8.057L3 5L12 14L21 5Z' fill='white' />
    </StyledArrowSVG>
  );
};

export default ThickArrowSVG;
