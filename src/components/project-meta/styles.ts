import styled, { keyframes, css } from "styled-components";
import { SCREEN_WIDTH, PROJECT_DETAIL_MAX_WIDTH } from "../../common/constants";

export const bounce = keyframes`
  0% {
    transform: translate3d(0, 20rem,0);
    opacity:0;
  }

  40%{
    opacity:1;
  }

  70% {
    transform: translate3d(0,-3rem,0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`;

interface StyledProjectMetaProps {
  isIntersected?: boolean;
}

export const IntersectionTarget = styled.div``;

export const ProjectMetaRoot = styled.div<StyledProjectMetaProps>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: #efedef;
  font-family: "NanumSquare", sans-serif;
  padding: 2rem;
  box-sizing: border-box;
  opacity: ${(props) => (props.isIntersected ? 1 : 0)};
  animation: ${(props) =>
    props.isIntersected
      ? css`
          ${bounce} ease-in-out 1.8s;
        `
      : ""};

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    max-width: ${PROJECT_DETAIL_MAX_WIDTH}rem;
    padding: 3rem;
  }
`;

export const ProjectTitle = styled.div`
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 6rem;
  line-height: 6rem;
  letter-spacing: -0.03em;
  word-break: keep-all;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    font-size: 8rem;
    line-height: 8.4rem;
  }
`;

export const ProjectPeriod = styled.div`
  font-size: 1.5rem;
  line-height: 2.2rem;
  letter-spacing: -0.03em;
  font-weight: 300;
  margin: 0.5rem 0 0 0;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    font-size: 1.7rem;
  }
`;

export const ProjectStackTitle = styled.h2`
  color: rgba(239, 237, 239, 0.9);
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0;
  margin: 3.5rem 0 1rem 0;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    font-size: 2.1rem;
    margin: 4.5rem 0 1.3rem 0;
  }
`;

export const ProjectStackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectStack = styled.div`
  background: #efedef;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-right: 0.9rem;

  &:last-child {
    margin: 0;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const ProjectSummaryContainer = styled.div`
  margin: 4.5rem 0 0 0;
`;

export const ProjectSummary = styled.p`
  font-family: "NanumSquare", sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 3.6rem;
  letter-spacing: -0.03em;
  color: rgba(239, 237, 239, 0.8);
  margin: 1.8rem 0 0 0;

  &:first-child {
    margin: 0;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    font-size: 2.2rem;
  }
`;

export const ProjectLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin: 7rem 0 0 0;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    justify-content: flex-start;
    margin: 12.5rem 0 0 0;
  }
`;

export const ProjectLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  background: ${(props) => props.color};
  border-radius: 0.5rem;
  text-decoration: none;
  font-family: "NanumSquare", sans-serif;
  color: rgba(239, 237, 239, 0.9);
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 3.4rem;
  margin: 0 0 1rem 0;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    font-size: 2.3rem;
    margin: 0 3.5rem 0 0;
    padding: 1rem 1rem;
  }
`;
export const ProjectLinkSVGContainer = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  margin: 0 0 0 0.7rem;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    margin: 0 0 0 1rem;
    width: 3rem;
    height: 3rem;
  }
`;
