import React from 'react';
import { isEqual } from 'lodash'
import { Button } from 'antd';
import styled from "styled-components";


const ButtonStyled = styled(Button)`
    border: 1px solid pink;
    background: pink;

    :hover {
        background: pink;
        border: 1px solid pink;
    }
`

interface buttonProps {
    type?: "link" | "text" | "default" | "ghost" | "primary" | "dashed" | undefined,
    style?: object,
    children: any,
    onClick: () => void
}


export const ButtonWrapped = React.memo(({type, style, children, onClick, ...props}: buttonProps) => {
  return (
      <ButtonStyled
          type={type}
          style={style}
          onClick={() => onClick()}
          {...props}
      >
          {children}
      </ButtonStyled>
  );
}, isEqual)

export default ButtonWrapped;