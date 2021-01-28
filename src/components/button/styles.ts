import styled from 'styled-components';

const beforeCss = `
  content: "";
  position: absolute;
  transform: skewX(40deg) translateX(-50%);
  background-color: #fff;
  top: 0;
  bottom: 0;
`;

export const Wrapper = styled.button`
  background-color: #ff5824;
  border: 0;
  height: 46px;
  width: 130px;
  padding: 5px 15px;
  border-radius: 25px;
  outline: none;
  position: relative;
  cursor: pointer;

  @keyframes feedback-go {
    from { 
      width: 0%;
      opacity: 0.4;
    }
    to { 
      width: 120%;
      opacity: 0.2;
    }
  }

  @keyframes feedback-back {
    from { 
      width: 120%;
      opacity: 0.2;
    }
    to { 
      width: 0%;
      opacity: 0;
    }
  }

  &:before {
    ${beforeCss}
    width: 0%;
    opacity: 0;
    animation: feedback-back .5s;
  }

  &:focus {
    &:before {
      ${beforeCss}
      width: 120%;
      opacity: 0.2;
      animation: feedback-go .5s;
    }
  }
`;
