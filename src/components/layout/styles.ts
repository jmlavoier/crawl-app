import styled from 'styled-components';

interface Props {
  grow: number,
  width: number,
  height: number,
  rest: unknown[],
}

export const Flex = styled.div.attrs((props: Props) => props)`
  display: flex;
  ${({ grow }) => `flex-grow: ${grow};`}
  ${({ width }) => `width: ${width};`}
  ${({ height }) => `height: ${height};`}
`;

export const Box = styled.div.attrs((props: Props) => props)`
  ${({ grow }) => `flex-grow: ${grow};`}
  ${({ width }) => `width: ${width};`}
  ${({ height }) => `height: ${height};`}
`;
