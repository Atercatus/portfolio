import React, { FunctionComponent } from "react";
import * as S from "./styles";
import FacebookSVG from "../../svgs/facebook";
import GithubSVG from "../../svgs/github";
import HomepageSVG from "../../svgs/homepage";
import ThickArrowSVG from "../../svgs/arrow/thick";
import LightArrowSVG from "../../svgs/arrow/light";
import { PAGE_INDEX, LINK_ADDRESS } from "../../common/constants";

const Main: FunctionComponent = () => {
  return (
    <S.Main>
      <S.TopContainer>
        <S.LogoContainer>
          <S.Logo>
            <S.LogoRow>A</S.LogoRow>
            <S.LogoRow>atercatus</S.LogoRow>
            <S.LogoRow>resume.</S.LogoRow>
          </S.Logo>
        </S.LogoContainer>
      </S.TopContainer>
      <S.MiddleContainer>
        <S.AvatarContainer>
          <S.Avatar src={"/images/avatar.png"} />
        </S.AvatarContainer>
        <S.TitleContainer>
          <S.Title>
            <S.TitleRow>
              A's <S.Line />
            </S.TitleRow>
            <S.TitleRow>PLANET</S.TitleRow>
          </S.Title>
        </S.TitleContainer>
      </S.MiddleContainer>

      <S.BottomContainer>
        <S.SocialBtnContainer>
          <S.SVGContainer href={LINK_ADDRESS.FACEBOOK}>
            <FacebookSVG />
          </S.SVGContainer>
          <S.SVGContainer href={LINK_ADDRESS.GITHUB}>
            <GithubSVG />
          </S.SVGContainer>
          <S.SVGContainer href={LINK_ADDRESS.BLOG}>
            <HomepageSVG />
          </S.SVGContainer>
        </S.SocialBtnContainer>

        <S.ScrollSign href={`/#${PAGE_INDEX.WEDEV}`}>
          <S.ScrollSignText>Explore Wedev</S.ScrollSignText>
          <S.ScrollSignBorder />
          <S.LightArrowContainer>
            <LightArrowSVG />
          </S.LightArrowContainer>
        </S.ScrollSign>

        <S.ThickArrowSVGContainer href={`/#${PAGE_INDEX.WEDEV}`}>
          <ThickArrowSVG />
        </S.ThickArrowSVGContainer>
      </S.BottomContainer>
    </S.Main>
  );
};

export default Main;
