import React, { FunctionComponent, useEffect, useState } from "react";
import { ProjectData } from "../../vendor/data-adaptor";
import * as S from "./styles";
import ProjectMeta from "../../components/project-meta";
import ProjectDetailCard from "../../components/project-detail-card";
import { PAGE_INDEX } from "../../common/constants";
import { SUBTITLE_COLOR } from "../../common/constants/palette";
import { getData } from "../../vendor/fetcher";
import ROUTES from "../../common/constants/routes";

const ProjectList: FunctionComponent = () => {
  const [projectData, setProjectData] = useState<ProjectData>({});

  useEffect(() => {
    async function fetchProjectData() {
      const newProjectData = await getData(ROUTES.PROJECT_DETAIL, {
        method: "GET",
      });

      setProjectData(newProjectData);
    }

    fetchProjectData();
  }, []);

  return (
    <S.ProjectListRoot>
      {Object.entries(projectData).map(([projectName, projectData]) => {
        const { META: meta, DETAILS: details } = projectData;
        const {
          TITLE: title,
          PERIOD: period,
          STACKS: stacks,
          SUMMARIES: summaries,
          LINKS,
        } = meta;
        const links = LINKS.map(({ HREF, NAME, SVG }) => {
          return { href: HREF, name: NAME, svg: SVG };
        });
        const pageIndex = PAGE_INDEX[projectName];

        return (
          <S.Project key={pageIndex}>
            <ProjectMeta
              pageIndex={pageIndex}
              title={title}
              period={period}
              stacks={stacks}
              summaries={summaries}
              links={links}
            />

            <S.ProjectDetailCardContainer>
              <S.ProjectDetailCardsBackground />
              {details.map((detail, idx) => {
                return (
                  <ProjectDetailCard
                    key={detail.SUBTITLE}
                    subtitleColor={SUBTITLE_COLOR[idx % SUBTITLE_COLOR.length]}
                    subtitle={detail.SUBTITLE}
                    detailImgSrc={detail.IMAGE_SRC}
                    detail={detail.DESCRIPTION}
                    appendices={detail?.APPENDICES}
                  />
                );
              })}
            </S.ProjectDetailCardContainer>
          </S.Project>
        );
      })}
    </S.ProjectListRoot>
  );
};

export default ProjectList;
