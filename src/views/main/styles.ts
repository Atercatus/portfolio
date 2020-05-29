import styled, { keyframes } from "styled-components";
import { StyledArrowSVG } from "../../svgs/arrow/thick/styles";
import { SCREEN_WIDTH } from "../../common/constants";

const Bounce = keyframes`
  50%{
    transform: translateY(5px);
  }
`;

export const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #131517;
  font-family: "Raleway", sans-serif;

  ${StyledArrowSVG} {
    margin-bottom: 1rem;
    cursor: pointer;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    padding: 2rem 0;
  }
`;

export const TopContainer = styled.div`
  flex: 2;
`;

export const MiddleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 10;

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    flex-direction: row;
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
  flex-direction: column;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    position: relative;
    flex-direction: row-reverse;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3.5rem 0 2.5rem 0;

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    margin: 0 15rem 0 0;
  }
`;

export const Avatar = styled.img`
  width: 18rem;
  height: 18rem;
  object-fit: fill;
  border-radius: 50%;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    width: 25rem;
    height: 25rem;
  }
`;

export const LogoContainer = styled.div`
  border-bottom: 1px solid #ffffff;
`;

export const Logo = styled.h1`
  text-transform: uppercase;
  color: #ffffff;
  margin: 1rem 0 1.5rem 0;
  line-height: 2.5rem;
  text-align: center;
  letter-spacing: 0.84em;
  font-size: 1.6rem;
  font-weight: normal;
  margin-right: -0.84em;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    font-size: 2rem;
    line-height: 3.1rem;
  }
`;

export const LogoRow = styled.span`
  display: block;
`;

export const SocialBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0 4rem 0;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    position: absolute;
    bottom: 4rem;
    right: 4rem;
    margin: 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2.5rem;
  flex: 0;
`;

export const Title = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 3.2rem;
  letter-spacing: 0.38em;
  line-height: 3.8rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    font-size: 6rem;
    line-height: 7rem;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    font-size: 8rem;
    line-height: 9.4rem;
  }
`;

export const TitleRow = styled.span`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-right: -1.2rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  border-bottom: 1px solid #ffffff;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    margin-right: 1rem;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    border-bottom: 2px solid #ffffff;
  }
`;

export const SVGContainer = styled.a`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0;
  margin: 0;
  margin-right: 4rem;

  &:last-child {
    margin-right: 0;
  }

  path {
    fill: #ffffff;
  }
`;

export const ThickArrowSVGContainer = styled.a`
  width: 2.8rem;
  height: 2.8rem;
  cursor: pointer;
  animation: ${Bounce} infinite ease-in-out 1s alternate;
  margin-bottom: 2.5rem;
  outline: none;
  text-decoration: none;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    display: none;
    width: 4rem;
  }
`;

export const ScrollSign = styled.a`
  cursor: pointer;
  display: none;
  user-select: none;
  text-decoration: none;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #ffffff;
    font-weight: light;
  }
`;

export const ScrollSignText = styled.div`
  font-weight: 300;
  color: #ffffff;
  line-height: 2.6rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    font-size: 2.6rem;
  }
`;

export const ScrollSignBorder = styled.span`
  width: 7rem;
  height: 0.2rem;
  border-bottom: 1px solid #ffffff;
  margin-bottom: 2rem;

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    width: 8rem;
  }
`;

export const LightArrowContainer = styled.div`
  width: 2rem;
  height: 3.2rem;
  animation: ${Bounce} infinite ease-in-out 1s alternate;

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    width: 2.3rem;
    height: 3.5rem;
  }
`;
