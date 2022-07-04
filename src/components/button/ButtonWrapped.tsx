import React from 'react';
import { isEqual } from 'lodash'
import { Button } from 'antd';
import styled from "styled-components";


const ButtonStyled = styled(Button)`
    background-color: #634BFF;
    border: 0px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    color: white;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: center;

    anticon {
        margin-right: 5px;
    }
    :hover {
        background-color: #634BFF;
        color: white;
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