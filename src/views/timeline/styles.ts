import styled from "styled-components";
import { SCREEN_WIDTH } from "../../common/constants";

export const Timeline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0rem 2rem 5rem 2rem;
  margin: 10rem 0 0 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 0 6rem 0;
  padding: 0 0 1.5rem 0;
  width: 100%;
`;

export const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 800;
  font-size: 4rem;
  line-height: 5rem;
  letter-spacing: 0.44em;
  color: #ffffff;
  box-sizing: border-box;
  margin: 0 -0.44em 0 0;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    font-size: 5rem;
    line-height: 5.6rem;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    font-size: 6rem;
    line-height: 6.7rem;
  }
`;

export const TitleUnderLine = styled.span`
  width: 32rem;
  height: 0.1rem;
  border-bottom: 1px solid #ffffff;
  margin: 1.5rem 0 0 0;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    width: 40rem;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    width: 48rem;
  }
`;
