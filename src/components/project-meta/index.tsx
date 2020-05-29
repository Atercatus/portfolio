import React, { FunctionComponent } from "react";
import * as S from "./styles";
import { SVG_MAP } from "../../svgs";
import { LINK_COLOR } from "../../common/constants/palette";
import { STACK_MAP } from "../../svgs/stacks";
import useIntersectionObserverAPI from "../../lib/hooks/use-intersection-observer-api";

interface ProjectMetaLink {
  href: string;
  name: string;
  svg: string;
}

interface ProjectMetaProps {
  pageIndex: string;
  title: string;
  period: string;
  stacks: string[];
  summaries: string[];
  links: ProjectMetaLink[];
}

const ProjectMeta: FunctionComponent<ProjectMetaProps> = ({
  pageIndex,
  title,
  period,
  stacks,
  summaries,
  links,
}) => {
  const { intersectionTarget, isIntersected } = useIntersectionObserverAPI();

  return (
    <S.IntersectionTarget ref={intersectionTarget}>
      <S.ProjectMetaRoot isIntersected={isIntersected}>
        <S.ProjectTitle id={pageIndex}>{title}</S.ProjectTitle>
        <S.ProjectPeriod>{period}</S.ProjectPeriod>
        <S.ProjectStackTitle>사용기술</S.ProjectStackTitle>
        <S.ProjectStackContainer>
          {stacks.map((stack) => {
            return (
              <S.ProjectStack key={stack}>
                {STACK_MAP[stack.toUpperCase()]}
              </S.ProjectStack>
            );
          })}
        </S.ProjectStackContainer>
        <S.ProjectSummaryContainer>
          {summaries.map((summary: string, idx: number) => {
            return <S.ProjectSummary key={idx}>{summary}</S.ProjectSummary>;
          })}
        </S.ProjectSummaryContainer>

        <S.ProjectLinkContainer>
          {links.map(({ href, name, svg }, idx) => {
            return (
              <S.ProjectLink key={name} color={LINK_COLOR[idx]} href={href}>
                {name}
                <S.ProjectLinkSVGContainer>
                  {SVG_MAP[svg.toUpperCase()]}
                </S.ProjectLinkSVGContainer>
              </S.ProjectLink>
            );
          })}
        </S.ProjectLinkContainer>
      </S.ProjectMetaRoot>
    </S.IntersectionTarget>
  );
};

export default ProjectMeta;
