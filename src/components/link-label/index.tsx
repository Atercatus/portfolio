import React, { FunctionComponent } from "react";
import * as S from "./styles";
import LinkSVG from "../../svgs/link";

interface LinkLabelProps {
  name: string;
  link: string;
  headBackground: string;
  bodyBackground: string;
  color: string;
}

const LinkLabel: FunctionComponent<LinkLabelProps> = ({
  name,
  link,
  headBackground,
  bodyBackground,
  color,
}) => {
  return (
    <S.LinkLabelRoot>
      <S.LinkLabelHead background={headBackground}>
        <S.LinkSVGContainer>
          <LinkSVG />
        </S.LinkSVGContainer>
      </S.LinkLabelHead>
      <S.LinkLabelBody href={link} background={bodyBackground} color={color}>
        {name}
      </S.LinkLabelBody>
    </S.LinkLabelRoot>
  );
};

export default LinkLabel;
