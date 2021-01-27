import styled, { css } from 'styled-components';

interface Props {
  grow?: number,
  width?: number,
  height?: number,
  m?: number,
  mt?: number,
  mb?: number,
  ml?: number,
  mr?: number,
  p?: number,
  pt?: number,
  pb?: number,
  pl?: number,
  pr?: number,
  alignItems?: string,
  justify?: string,
}

const defaultStyles = css`
  ${(props: Props) => props.grow && `flex-grow: ${props.grow};`}
  ${(props: Props) => props.width && `width: ${props.width}px;`}
  ${(props: Props) => props.height && `height: ${props.height}px;`}
  ${(props: Props) => props.m && `margin: ${props.m}px;`}
  ${(props: Props) => props.mt && `margin-top: ${props.mt}px;`}
  ${(props: Props) => props.mb && `margin-bottom: ${props.mb}px;`}
  ${(props: Props) => props.ml && `margin-left: ${props.ml}px;`}
  ${(props: Props) => props.mr && `margin-right: ${props.mr}px;`}
  ${(props: Props) => props.p && `padding: ${props.p}px;`}
  ${(props: Props) => props.pt && `padding-top: ${props.pt}px;`}
  ${(props: Props) => props.pb && `padding-bottom: ${props.pb}px;`}
  ${(props: Props) => props.pl && `padding-left: ${props.pl}px;`}
  ${(props: Props) => props.pr && `padding-right: ${props.pr}px;`}
`;

export const Flex = styled.div`
  display: flex;
  ${defaultStyles}
  ${(props: Props) => props.alignItems && `align-items: ${props.alignItems};`}
  ${(props: Props) => props.justify && `justify-content: ${props.justify};`}
`;

export const Box = styled.div`
  ${defaultStyles}
`;
