import styled from 'styled-components';

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
  vertical-align: middle;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
  animation-name: spin-animation;
  height: 10px;
  width: 10px;
`;

export const Loading = styled.div.attrs((props) => props)`
  width: 50px;
  height: 10px;
  display: inline-block;
  
  span {
    background-color: ${({ color }) => color};
  }
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
