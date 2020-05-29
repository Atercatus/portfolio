import styled from "styled-components";

export const ProjectListRoot = styled.div``;

export const Project = styled.div`
  background: #131517;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10rem 0 0 0;
`;

export const ProjectStackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectDetailCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10rem 0 0 0;
  padding: 30rem 2rem 20rem 2rem;
  box-sizing: border-box;
`;

export const ProjectDetailCardsBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  clip-path: polygon(0 5%, 100% 0, 100% 95%, 0% 100%);
  background: linear-gradient(
      180deg,
      rgba(20, 23, 29, 0.4) 0%,
      #1d2027 50%,
      rgba(20, 23, 29, 0.4) 100%
    ),
    #1d2027;
`;
