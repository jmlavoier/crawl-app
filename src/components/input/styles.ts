import styled from 'styled-components';

import { ReactComponent as Search } from 'assets/icons/search.svg';

export const Input = styled.input`
  font-size: 24px;
  flex-grow: 1;
  border: 1;
  border: 3px solid #000;
  border-radius: 25px;
  padding: 5px 40px;
  outline: none;
  transition: border-color .3s;
  
  &:focus {
    border-color: #ff5824;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 46px;
  position: relative;
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  top: 12px;
  left: 12px;
  cursor: pointer;
`;
