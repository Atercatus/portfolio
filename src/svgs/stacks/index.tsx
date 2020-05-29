import React, { FunctionComponentElement } from "react";
import AWSSVG from "./aws";
import ContentfulSVG from "./contentful";
import CPPSVG from "./cpp";
import FigmaSVG from "./figma";
import NestSVG from "./nest";
import NextSVG from "./next";
import PythonSVG from "./python";
import TypescriptSVG from "./typescript";
import VercelSVG from "./vercel";
import ReactSVG from "./react";

export const STACK_MAP: {
  [key: string]: FunctionComponentElement<SVGElement>;
} = {
  AWS: <AWSSVG />,
  CONTENTFUL: <ContentfulSVG />,
  CPP: <CPPSVG />,
  FIGMA: <FigmaSVG />,
  NEST: <NestSVG />,
  NEXT: <NextSVG />,
  PYTHON: <PythonSVG />,
  TYPESCRIPT: <TypescriptSVG />,
  VERCEL: <VercelSVG />,
  REACT: <ReactSVG />,
};
