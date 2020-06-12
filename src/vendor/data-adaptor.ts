export interface APPENDIX {
  NAME: string;
  LINK: string;
}

interface ProjectDetail {
  SUBTITLE: string;
  DESCRIPTION: string;
  IMAGE_SRC: string;
  APPENDICES?: APPENDIX[];
}

interface ProjectMeta {
  TITLE: string;
  PERIOD: string;
  STACKS: string[];
  SUMMARIES: string[];
  LINKS: Link[];
}

interface Link {
  HREF: string;
  NAME: string;
  SVG: string;
}

export interface ProjectData {
  [key: string]: {
    META: ProjectMeta;
    DETAILS: ProjectDetail[];
  };
}

interface TimelineData {
  PERIOD: string;
  ACTIVITY: string;
  HOST: string;
  ACTIVITY_DESCRIPTIONS: string[];
  APPENDICES?: APPENDIX[];
}

export interface Activities {
  [key: string]: TimelineData;
}
