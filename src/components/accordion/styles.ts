import styled from 'styled-components';

const getPropOpen = (props: { open: boolean }) => ({
  ...props,
  open: props.open,
});

export const Wrapper = styled.div.attrs(getPropOpen)`
  border-bottom: 2px solid #000;
  margin-bottom: 5px;
  max-height: ${({ open }) => (open ? '1000px' : '46px')};
  overflow: hidden;
  transition: max-height 0.5s;
  box-sizing: border-box;
`;

export const Title = styled.div.attrs(getPropOpen)`
  display: flex;
  margin: 0;
  height: 40px;
  position: relative;
  padding-left: 15px;
  cursor: pointer;

  &:after {
    content: "";
    border-right: 3px solid #000;
    border-bottom: 3px solid #000;
    position: absolute;
    right: 16px;
    top: 6px;
    width: 15px;
    height: 15px;
    top: ${({ open }) => (open ? '14px' : '6px')};
    transform: rotate(${({ open }) => (open ? '225deg' : '45deg')});
  }
`;

export const Body = styled.div.attrs(getPropOpen)`
  padding: 10px;
`;
