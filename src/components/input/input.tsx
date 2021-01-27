import * as React from 'react';

import {
  Wrapper,
  Input as StyledInput,
  SearchIcon,
} from './styles';

interface Props {
  value?: string,
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void,
  placeholder?: string,
}

const { useCallback, useRef } = React;

function Input({
  value, onChange, placeholder,
}: Props): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    const el = inputRef.current;
    if (el) {
      el.focus();
    }
  }, []);

  return (
    <Wrapper>
      <SearchIcon data-testid="icon" width="22px" height="22px" onClick={handleClick} />
      <StyledInput ref={inputRef} data-testid="input" value={value} onChange={onChange} placeholder={placeholder} />
    </Wrapper>
  );
}

Input.defaultProps = {
  value: '',
  onChange: () => {},
  placeholder: '',
};

export default Input;
