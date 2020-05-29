import styled from "styled-components";
import { SCREEN_WIDTH } from "../../common/constants";

export const LinkLabelRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 4rem;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    height: 4.4rem;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    height: 5rem;
  }
`;

interface LinkLabelHeadProps {
  background: string;
}

export const LinkLabelHead = styled.div<LinkLabelHeadProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 100%;
  background: ${(props) => props.background};
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;

export const LinkSVGContainer = styled.div`
  width: 2rem;
  height: 2rem;

  svg {
    path {
      fill: #ffffff;
    }
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    width: 1.8rem;
    height: 1.8rem;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    width: 2.2rem;
    height: 2.2rem;
  }
`;

interface LinkLabelBodyProps {
  background: string;
  color: string;
}

export const LinkLabelBody = styled.a<LinkLabelBodyProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.7rem;
  letter-spacing: -0.03em;
  box-sizing: border-box;
  padding: 0.3rem 1.2rem;
  white-space: nowrap;
  height: 100%;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  @media only screen and (min-width: ${SCREEN_WIDTH.MOBILE}px) {
    font-size: 1.6rem;
    line-height: 2rem;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.WIDE_MOBILE}px) {
    font-size: 1.8rem;
    line-height: 2.3rem;
  }
`;
