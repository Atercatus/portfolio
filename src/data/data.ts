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

export const PROJECT_DATA: ProjectData = {
  WEDEV: {
    META: {
      TITLE: "Wedev",
      PERIOD: "2019.11 ~ 2019.12",
      STACKS: ["typescript", "aws", "nest", "next"],
      SUMMARIES: [
        `wedev.tv(또는 wedev, 위데브)는 소프트웨어 엔지니어들이 소프트웨어
      기술과 관련된 동영상을 공유하고, 의견을 나누며, 커리어 프로필을 작성할
      수 있는 곳입니다. 현재 조회를 제외한 나머지 기능은 인프라 유지비용이 부족하여 비활성화 되어있습니다. 
      유지보수의 편의성을 위하여 CloudFormation 도입을 준비중입니다.`,
      ],
      LINKS: [
        { HREF: "https://wedev.tv", NAME: "사이트 방문", SVG: "exit" },
        {
          HREF: "https://github.com/team-wedev/wedev",
          NAME: "저장소 방문",
          SVG: "github",
        },
      ],
    },
    DETAILS: [
      {
        SUBTITLE: "동영상 업로드 및 인코딩 파이프라인",
        DESCRIPTION: `비디오 파일과 비디오 메타데이터 간의 동기화를 맞추기 위한
      파이프라인입니다. 클라이언트가 S3에 직접 접근하기 위한 pre-signed
      url을 lambda에게 요청하는 것으로부터 업로드가 시작됩니다. 
      클라이언트는 비디오 파일을 업로드 완료만을 기다리며 나머지 작업은 비동기적으로
      이루어집니다.
      서버에서는 비디오 메타데이터 수신과 인코딩 작업 완료 메시지 모두
      수신되었을 경우에 DB에 해당 데이터를 저장합니다.`,
        IMAGE_SRC: "/images/wedev/wedev-pipeline.png",
      },
      {
        SUBTITLE: "서버리스 배포",
        DESCRIPTION: `API 서버는 Lambda와 API Gateway를 이용해 배포되었습니다.
        API 서버에서 외부 API call 을 할 수 있게 NAT Instance 를 구축했습니다. API 서버는
        프론트엔드는 serverless 프레임워크를 사용했습니다.
        Lambda를 호출하여 cloudfront 내의 소스를 갱신하는 방식입니다.`,
        IMAGE_SRC: "/images/wedev/wedev-aws-arch.png",
      },
      {
        SUBTITLE: "회원가입 및 인증 개요도",
        DESCRIPTION: `Github OAuth 를 이용한 인증시스템을 구축했습니다. 
        Redis 를 이용하여 세션을 관리하고 JWT를 이용하여 세션 테이블키를 관리합니다.
        refresh token 과 access token 을 모두 이용한 JWT 전략을 사용했습니다.
        해당 전략에 대한 자세한 내용은 포스트로 작성하였습니다. 아래에 링크를 남겨두었습니다.
        모듈 단위의 설계로 의존성을 줄이고 유지보수성을 높였습니다.`,
        IMAGE_SRC: "/images/wedev/wedev-auth.png",
        APPENDICES: [
          {
            NAME: "JWT에 대한 고찰",
            LINK:
              "https://contentful-atercatus-blog.now.sh/posts/68nKGwZFvLbLwiQOGP6O6s/where-to-store-jwt",
          },
        ],
      },
    ],
  },

  AUTONOMOUS_RC_CAR: {
    META: {
      TITLE: "Auto Driving Rasberry-pi RC Car",
      PERIOD: "2018.12 ~ 2019.05",
      STACKS: ["python"],
      SUMMARIES: [
        `Rasberry-pi를 이용해 자율주행 RC Car 를 제작했습니다. 
      NVIDIA 의 End to Learning for Self-Driving Cars 에 소개된 모델을 튜닝후에 적용했습니다.
      시뮬레이션을 제작 후에 해당 모델을 실제 RC Car에 적용했습니다.`,
      ],
      LINKS: [
        {
          HREF: "https://www.youtube.com/watch?v=aoWW9ZqTkPg",
          NAME: "시뮬레이션",
          SVG: "exit",
        },
        {
          HREF: "https://github.com/Atercatus/Autonomous-Raspberry-RC-car",
          NAME: "저장소 방문",
          SVG: "github",
        },
      ],
    },
    DETAILS: [
      {
        SUBTITLE: "RC Car 구조도",
        DESCRIPTION: `바퀴를 회전시키는 DC Motor 와 좌우 회전을 담당하는 Servo Motor,
        3대의 Webcam 으로 이루어져 있습니다. Dualshock 4 를 이용하여 촬영
        및 조종이 가능합니다.`,
        IMAGE_SRC: "/images/autonomous-rc-car/rc-arch.jpg",
        APPENDICES: [
          {
            NAME: "초기 구현",
            LINK:
              "https://drive.google.com/file/d/1Ij6PeHdzZF8pJZZhpZ8UlHcfc6KQIobV/view?usp=sharing",
          },
        ],
      },
      {
        SUBTITLE: "Block Diagram of DAVE-2",
        DESCRIPTION: `모델을 학습시키기 위한 구성도입니다. 3대의 카메라가 촬영한 원본을
        변형한 이미지와 원본에 맞는 핸들 각도를 입력으로 하여 훈련을
        반복합니다.`,
        IMAGE_SRC: "/images/autonomous-rc-car/dave-2.png",
        APPENDICES: [
          {
            NAME: "초기 훈련 영상",
            LINK:
              "https://drive.google.com/file/d/1Exb5xfEkjCvwAce249u5HnUCe3mNrjs6/view?usp=sharing",
          },
        ],
      },
      {
        SUBTITLE: "시뮬레이션",
        DESCRIPTION: `위의 코드는 학습하기 위한 이미지 트레이닝 셋을 만들기 위해 Data
        Augment 를 진행하는 모습입니다. 
        위의 시뮬레이션 버튼을 이용하여 시뮬레이션 영상을 보실 수 있습니다.`,
        IMAGE_SRC: "/images/autonomous-rc-car/preprocessing.png",
        APPENDICES: [
          {
            NAME: "시뮬레이션 구현 일부",
            LINK:
              "https://github.com/Atercatus/Autonomous-Raspberry-RC-car/blob/master/Simulator/Behavioural_Cloning.ipynb",
          },
        ],
      },
    ],
  },
  AQUA_SIM: {
    META: {
      TITLE: "Aqua sim",
      PERIOD: "2018.09 ~ 2018.11",
      STACKS: ["cpp"],
      SUMMARIES: [
        `수중 무선 센서 네트워크에서, 기존의 RTS-CTS-DATA-ACK 의 비동기
      과정에서 발생할 수 있는 충돌과 먼저 RTS를 송신했음에도 불구하고 채널을
      독점할 수 없는 불편등을 해소하기 위해 고안된 MAC 프로토콜입니다.  
      `,
        `각 패킷에 수신지에 맞는 지연을 부과해주는 방식의 SF-MAC과 슬롯 기반인
      Slot-SF-MAC의 시뮬레이션이 구현되어 있습니다. 기존에 작성된 FAMA와 S-FAMA 프로토콜 구현부를 수정하면서 처음으로 오픈소스 참여를 경험했습니다.`,
      ],
      LINKS: [
        {
          HREF: "https://github.com/Atercatus/aqua-sim-ng",
          NAME: "저장소 방문",
          SVG: "github",
        },
      ],
    },
    DETAILS: [
      {
        SUBTITLE: "Aqua-sim 구조도",
        DESCRIPTION: `NS-3 를 기반으로 하여 무선네트워크 시뮬레이션을 가능하게 하는
        시뮬레이터입니다. 제가 제작한 프로토콜은 MAC 계층에 존재하는 Aqua
        Sim MAC내의 FAMA 와 S-FAMA 를 개량한 것 입니다.`,
        IMAGE_SRC: "/images/aqua-sim/aqua-sim-arch.png",
      },
      {
        SUBTITLE: "Packet flow",
        DESCRIPTION: `Aqua sim 내에서 시뮬레이션 동작 과정동안 패킷의 흐름을 나타내는
        개요도입니다. MAC 계층에서는 AquaSimMac 의 패킷에만 관여하게 됩니다.`,
        IMAGE_SRC: "/images/aqua-sim/aqua-sim-flow.png",
      },
    ],
  },
  A_SERIES: {
    DETAILS: [],
    META: {
      TITLE: "A SERIES",
      PERIOD: "2020.05.02 ~ 진행중",
      STACKS: ["next", "contentful", "figma", "vercel"],
      SUMMARIES: [
        `저의 자료들을 모아두기 위한 저장소로 개발한 블로그 입니다. 현재
      개발중에 있으며 기본적인 포스팅 및 조회는 가능합니다. CMS 로
      Contentful 을 사용했습니다.`,
      ],
      LINKS: [
        {
          HREF: "https://contentful-atercatus-blog.myleelee2053.now.sh/",
          NAME: "사이트 방문",
          SVG: "exit",
        },
        {
          HREF: "https://github.com/Atercatus/contentful-blog",
          NAME: "저장소 방문",
          SVG: "github",
        },
      ],
    },
  },
  A_PLANET: {
    META: {
      TITLE: "A’s PLANET RESUME",
      PERIOD: "2020.05.23 ~ 2020.05.29",
      STACKS: ["react", "figma", "vercel"],
      SUMMARIES: [
        `현재 보고 계시는 페이지로 저의 프로젝트 경험과 활동들에 대한 간략한
        소개를 하기 위해 제작했습니다. 부족하지만 봐주셔서 감사합니다.`,
      ],
      LINKS: [
        {
          HREF: "https://github.com/Atercatus/portfolio",
          NAME: "저장소 방문",
          SVG: "github",
        },
      ],
    },
    DETAILS: [
      {
        SUBTITLE: "Figma를 이용하여 디자인",
        DESCRIPTION: `Figma를 이용하여 현재 페이지를 구성해봤습니다. 메인의 경우 모바일, 태블릿, 데스크탑, 넓은 데스크탑
         총 4개의 화면을 구성했고, 나머지 부분은 디자인에서 크게 변동사항이 없이 각 요소의 크기만 변경되었기 때문에
         별도의 디자인을 작성하지 않았습니다.`,
        IMAGE_SRC: "/images/a-planet/figma.png",
        APPENDICES: [
          {
            NAME: "figma 소스",
            LINK:
              "https://drive.google.com/drive/folders/1kldIIoJCjwTOlGiAhADfWeSo97TzAs_y?usp=sharing",
          },
        ],
      },
    ],
  },

  PROTOPIE_RESUME: {
    META: {
      TITLE: "PROTOPIE RESUME",
      PERIOD: "2020.05.29 ~ 2020.05.30",
      STACKS: ["protopie"],
      SUMMARIES: [`프로토파이로 간략한 자기소개서를 만들어봤습니다.`],
      LINKS: [
        {
          HREF:
            "https://drive.google.com/drive/folders/1GhuCa8-Np62jsoc3plowTevBLDNYyC6k?usp=sharing",
          NAME: "소스 보기",
          SVG: "exit",
        },
      ],
    },
    DETAILS: [],
  },
};

interface TimelineData {
  PERIOD: string;
  ACTIVITY: string;
  HOST: string;
  ACTIVITY_DESCRIPTIONS: string[];
  APPENDICES?: APPENDIX[];
}

export const TIMELINE_DATA: { [key: string]: TimelineData } = {
  BOOSTCAMP_CHALLENGE: {
    PERIOD: "2019-07-15 ~ 2019-08-09",
    ACTIVITY: "부스트캠프 2019 챌린지",
    HOST: "커넥트재단",
    ACTIVITY_DESCRIPTIONS: [
      `1. 소프트웨어 공학 지식을 요구하는 문제를 매일 정해진 시간 내에
    JavaScript ES6 기반 코드로 해결 (비동기, 객체지향, 자료구조, DVCS,
    아키텍처, 네트워크 등)`,
      `2. 매주 금요일 다른 프로젝트를 이어받아 개발하는 ‘릴레이 프로젝트’
    를 수행`,
    ],
  },
  BOOSTCAMP_MEMBERSHIP: {
    PERIOD: "2019-08-26 ~ 2019-12-20",
    ACTIVITY: "부스트캠프 2019 멤버십",
    HOST: "커넥트재단",
    ACTIVITY_DESCRIPTIONS: [
      `1. 개별 클론 코딩 프로젝트를 통한 웹 풀스택 지식 학습 회원가입 및
    로그인 구현 Amazon 쇼핑슬라이드(캐러셀 UI)구현 Github Project형
    todo 어플리케이션 구현 Airbnb 검색 페이지 구현`,
      `2. React, Node.js 기반의 웹서비스를 기획하여 팀 프로젝트 수행 맡은
    기능에 대해 프론트엔드, 백엔드 모두 개발`,
    ],
  },
  NAVER_INTERN: {
    PERIOD: "2020-02-03 ~ 2020-03-27",
    ACTIVITY: "부스트캠프 채용연계형 인턴십",
    HOST: "NAVER apollo",
    ACTIVITY_DESCRIPTIONS: [
      `8주간의 프로젝트 진행, 그 과정에서 프로처럼 일하는 법 학습`,
    ],
    APPENDICES: [
      {
        NAME: "NAVER 인턴십 후기 포스팅",
        LINK:
          "https://contentful-atercatus-blog.now.sh/posts/Q5mi6RtRWbSuOeklJskgq/naver-internship-review",
      },
    ],
  },
};
