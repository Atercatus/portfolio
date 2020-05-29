import React, { FunctionComponent } from "react";
import * as S from "./styles";
import useIntersectionObserverAPI from "../../lib/hooks/use-intersection-observer-api";
import { APPENDIX } from "../../data/data";

interface ProjectDetailCardProps {
  subtitleColor: string;
  subtitle: string;
  detailImgSrc: string;
  detail: string;
  appendices?: APPENDIX[];
}

const supportIntersectionObserverAPI = !("IntersectionObserver" in window);

const ProjectDetailCard: FunctionComponent<ProjectDetailCardProps> = ({
  detail,
  detailImgSrc,
  subtitle,
  subtitleColor,
  appendices,
}: ProjectDetailCardProps) => {
  const { intersectionTarget, isIntersected } = useIntersectionObserverAPI();

  return (
    <S.IntersectionTarget ref={intersectionTarget}>
      <S.ProjectDetailCardRoot isIntersected={isIntersected}>
        <S.ProjectSubtitle color={subtitleColor}>{subtitle}</S.ProjectSubtitle>
        <S.ProjectDetailImage
          data-src={detailImgSrc}
          src={supportIntersectionObserverAPI ? "" : detailImgSrc}
        />
        <S.ProjectDetail>{detail}</S.ProjectDetail>
        {!!appendices?.length && (
          <S.AppendisContainer>
            {appendices?.map(({ NAME: name, LINK: link }) => {
              return (
                <S.Appendix key={name} href={link}>
                  {name}
                </S.Appendix>
              );
            })}
          </S.AppendisContainer>
        )}
      </S.ProjectDetailCardRoot>
    </S.IntersectionTarget>
  );
};

export default ProjectDetailCard;
