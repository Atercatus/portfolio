import React, { FunctionComponent } from "react";
import * as S from "./styles";
import { APPENDIX } from "../../vendor/data-adaptor";
import LinkLabel from "../link-label";

interface TimelineCardProp {
  period: string;
  activity: string;
  host: string;
  activityDescriptions: string[];
  appendices?: APPENDIX[];
}

const TimelineCard: FunctionComponent<TimelineCardProp> = ({
  period,
  activity,
  host,
  activityDescriptions,
  appendices,
}) => {
  return (
    <S.TimelineCardRoot>
      <S.TimeCardBorder>
        <S.BorderHead />
        <S.BorderTail />
      </S.TimeCardBorder>
      <S.TimeCardData>
        <S.Period>{period}</S.Period>
        <S.Activity>{activity}</S.Activity>
        <S.Host>{host}</S.Host>
        <S.ActivityDescriptionContainer>
          {activityDescriptions.map((description: string, idx: number) => {
            return (
              <S.ActivityDescription key={idx}>
                {description}
              </S.ActivityDescription>
            );
          })}
        </S.ActivityDescriptionContainer>
        <S.AppendicesContainer>
          {appendices?.map(({ NAME: name, LINK: link }) => {
            return (
              <LinkLabel
                key={name}
                name={name}
                link={link}
                headBackground={"#B94743"}
                bodyBackground={"#D9534F"}
                color={"#efedef"}
              />
            );
          })}
        </S.AppendicesContainer>
      </S.TimeCardData>
    </S.TimelineCardRoot>
  );
};

export default TimelineCard;
