import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const Wrapper = styled.div`
  flex-grow: 1;
  max-width: 1200px;
`;

export const BaloonWrapper = styled.div`
  position: relative;
`;

export const Baloon = styled.div`
  border: 1px solid #ed0000;
  padding: 8px;
  position: absolute;
  margin-top: 5px;
  bottom: -42px;
  white-space: nowrap;

  &:before {
    content: "";
    position: absolute;
    transform: rotate(225deg);
    border-right: 1px solid #ed0000;
    border-bottom: 1px solid #ed0000;
    background-color: #fff;
    width: 9px;
    height: 9px;
    top: -6px;
    left: 10px;
  }
`;
