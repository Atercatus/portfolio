import React, { FunctionComponentElement } from "react";
import ExitSVG from "./exit";
import GithubSVG from "./github";

export const SVG_MAP: {
  [key: string]: FunctionComponentElement<SVGElement>;
} = {
  EXIT: <ExitSVG />,
  GITHUB: <GithubSVG />,
};
