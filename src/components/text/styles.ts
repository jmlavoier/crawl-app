/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

type Weight = 'bold' | 'semiBold' | 'normal' | 'fin';

enum Weights {
  bold = 700,
  semiBold = 500,
  normal = 300,
  fin = 100,
}

interface Props {
  size: number,
  weight: Weight,
  height: number,
}

export const Wrapper = styled.p.attrs(
  (props: Props) => props,
)`
  font-family: "Museo Sans Rounded ${({ weight }) => Weights[weight] || '300'}";
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
  ${({ height }) => (height ? `
    line-height: ${height}px;
    height: ${height}px;
  ` : '')}

  font-weight: ${({ weight }) => weight};
  margin: 0;
`;
