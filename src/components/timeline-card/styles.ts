import styled from "styled-components";
import { SCREEN_WIDTH } from "../../common/constants";

export const TimelineCardRoot = styled.div`
  font-family: "NanumSquare", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem;
  max-width: 40rem;
  width: 100%;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    max-width: 50rem;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    max-width: 65rem;
  }
`;

export const TimeCardBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: stretch;
`;

export const BorderHead = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: #ff6661;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const BorderTail = styled.div`
  width: 0.1rem;
  height: 100%;
  border: 1px solid #ff776f;
  margin: 0.4rem 0 0 0;
  box-sizing: border-box;
`;

export const TimeCardData = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 0 0 2rem;
  padding: 1.5rem 0 0 0;
  width: 100%;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    padding: 1.8rem 0 0 0;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    padding: 2.5rem 0 0 0;
  }
`;

export const Period = styled.div`
  font-weight: 800;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.03em;
  color: rgba(239, 237, 239, 0.5);

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    font-size: 1.5rem;
    line-height: 1.8rem;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    font-size: 1.8rem;
    line-height: 2rem;
  }
`;

export const Activity = styled.h3`
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 3.5rem;
  letter-spacing: -0.03em;
  color: #ff9d8d;
  margin: 0;
  padding: 0;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    font-size: 2.3rem;
    line-height: 4.5rem;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    font-size: 2.8rem;
    line-height: 5.5rem;
  }
`;

export const ActivityDescriptionContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 1.6rem 0 0 0;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    margin: 3rem 0 0 0;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    margin: 4rem 0 0 0;
  }
`;

export const ActivityDescription = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2.7rem;
  letter-spacing: -0.03em;
  color: #efedef;
  word-break: keep-all;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    font-size: 1.6rem;
    line-height: 2.9rem;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    font-size: 1.8rem;
    line-height: 3.5rem;
  }
`;

export const Host = styled.div`
  font-weight: 800;
  font-size: 1.2rem;
  line-height: 1.7rem;
  letter-spacing: -0.03em;
  color: rgba(239, 237, 239, 0.5);

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    font-size: 1.8rem;
    line-height: 2rem;
  }
`;

export const AppendicesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 6.5rem 0;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    margin: 0 0 7.5rem;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    margin: 0 0 9rem 0;
  }
`;
