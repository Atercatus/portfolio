import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    font-size:10px;
    font-family: "Roboto", "NanumSquare", sans-serif;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 1.2rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #323742; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #131517; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  html, body {
    width:100%;
    min-height: 100vh;
    margin:0;
    padding:0;
    scroll-behavior:smooth;
    background:#131517;
  }

  /* 모바일에서 클릭 시 하이라이팅 되는 부분을 제거 */
  /* https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW5 */
  * {
    -webkit-tap-highlight-color: transparent;
  }
`;
