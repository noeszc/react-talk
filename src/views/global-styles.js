import { injectGlobal } from 'styled-components';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
      margin: 0;
      background-color: #141414;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  ul{
      padding: 0;
      list-style: none;
  }
  p {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 2em;
    color: rgba(255, 255, 255, 0.8);
  }
  `;
