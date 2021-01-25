/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #000;
`;

export const Title = styled.h4`
  border: 1px solid #000;
`;

export const Body = styled.div.attrs((props: { open: boolean }) => ({
  ...props,
  open: props.open,
}))`
  display: ${({ open }) => (open ? 'block' : 'none')};
`;
