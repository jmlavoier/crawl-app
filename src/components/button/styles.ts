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

export const SpinStyle = `
  @keyframes spin-animation {
    0% {
      height: 10px;
      width: 10px;
    }
    50% {
      height: 4px;
      width: 4px;
    }
    100% {
      height: 10px;
      width: 10px;
    }
  }

  border-width: 0;
  border-radius: 50%;
  display: inline-block;
  background-color: #fff;
  vertical-align: middle;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
  animation-name: spin-animation;
  height: 10px;
  width: 10px;
`;

export const Loading = styled.div`
  width: 100px;
  height: 10px;
  display: inline-block;
`;

export const Spin1 = styled.span`
  ${SpinStyle}
  animation-delay: .1s;
`;

export const Spin2 = styled.span`
  ${SpinStyle}
  margin-left: 7px;
  margin-right: 7px;
  animation-delay: .3s;
`;

export const Spin3 = styled.span`
  ${SpinStyle}
  animation-delay: .5s;
`;
