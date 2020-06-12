import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { Activities } from "../../vendor/data-adaptor";
import TimelineCard from "../../components/timeline-card";
import ROUTES from "../../common/constants/routes";
import { getData } from "../../vendor/fetcher";

const Timeline = () => {
  const [activities, setActivities] = useState<Activities>({});

  useEffect(() => {
    async function fetchActivities() {
      const newActivities = await getData(ROUTES.TIMELINE, {
        method: "GET",
      });

      setActivities(newActivities);
    }

    fetchActivities();
  }, []);

  return (
    <S.Timeline>
      <S.TitleContainer>
        <S.Title>TIMELINE</S.Title>
        <S.TitleUnderLine />
      </S.TitleContainer>

      {Object.entries(activities).map(([activityName, activityData]) => {
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
