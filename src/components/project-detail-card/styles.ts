import styled, { css, keyframes } from "styled-components";
import { PROJECT_DETAIL_MAX_WIDTH, SCREEN_WIDTH } from "../../common/constants";

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

interface StyledProjectDetailCardProps {
  isIntersected?: boolean;
}

export const IntersectionTarget = styled.div`
  margin: 0 0 15rem 0;
  z-index: 1;
`;

export const ProjectDetailCardRoot = styled.div<StyledProjectDetailCardProps>`
  font-family: "NanumSquare", sans-serif;
  max-width: ${PROJECT_DETAIL_MAX_WIDTH}rem;
  padding: 2rem 1rem;
  background: linear-gradient(
      180deg,
      rgba(20, 23, 29, 0.25) 0%,
      #3a404c 51.16%,
      rgba(20, 23, 29, 0.4) 100%
    ),
    #3a404c;
  box-shadow: 0px 0.6rem 3.5rem rgba(0, 0, 0, 0.25);
  border-radius: 0.3rem;
  opacity: ${(props) => (props.isIntersected ? 1 : 0)};
  animation: ${(props) =>
    props.isIntersected
      ? css`
          ${bounce} ease-in-out 1.4s backwards;
        `
      : ""};

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    padding: 3rem;
  }
`;

export const ProjectSubtitle = styled.div`
  background: ${(props) => props.color};
  font-weight: 800;
  font-size: 1.6rem;
  line-height: 3rem;
  letter-spacing: -0.03em;
  color: rgba(239, 237, 239, 0.9);
  padding: 0.3rem 0.8rem 0.1rem 0.8rem;
  margin: 0 0 1.5rem 0;
  border-radius: 0.3rem;
  width: fit-content;
  white-space: nowrap;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    font-size: 1.8rem;
    line-height: 3.3rem;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    font-size: 2rem;
    line-height: 3.8rem;
  }
`;

export const ProjectDetailImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 0.3rem;
`;

export const ProjectDetail = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.8rem;
  letter-spacing: -0.03em;
  color: rgba(239, 237, 239, 0.85);
  word-break: break-word;
  margin: 2rem 0 0 0;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    font-size: 1.8rem;
    line-height: 3.3rem;
    margin: 2.4rem 0 0 0;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    font-size: 2rem;
    line-height: 4rem;
  }
`;

export const AppendisContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem 0 0 0;
`;

export const Appendix = styled.a`
  background: #1f1f1f;
  font-weight: 800;
  font-size: 1.6rem;
  line-height: 3rem;
  letter-spacing: -0.03em;
  color: rgba(239, 237, 239, 0.9);
  padding: 0.3rem 0.8rem 0.1rem 0.8rem;
  margin: 0 2rem 0 0;
  border-radius: 0.3rem;
  width: fit-content;
  white-space: nowrap;
  border-radius: 5px;
  text-decoration: none;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    font-size: 1.8rem;
    line-height: 3.3rem;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    font-size: 2rem;
    line-height: 3.8rem;
  }
`;
