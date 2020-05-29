import React from "react";
import * as S from "./styles";
import { TIMELINE_DATA } from "../../data/data";
import TimelineCard from "../../components/timeline-card";

const Timeline = () => {
  const datas = Object.entries(TIMELINE_DATA);

  return (
    <S.Timeline>
      <S.TitleContainer>
        <S.Title>TIMELINE</S.Title>
        <S.TitleUnderLine />
      </S.TitleContainer>

      {datas.map(([activityName, activityData]) => {
        const {
          ACTIVITY: activity,
          PERIOD: period,
          HOST: host,
          ACTIVITY_DESCRIPTIONS: activityDescriptions,
          APPENDICES: appendices,
        } = activityData;

        return (
          <TimelineCard
            key={activityName}
            period={period}
            activity={activity}
            host={host}
            activityDescriptions={activityDescriptions}
            appendices={appendices}
          />
        );
      })}
    </S.Timeline>
  );
};

export default Timeline;
