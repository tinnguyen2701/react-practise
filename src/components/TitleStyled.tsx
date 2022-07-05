import styled from "styled-components"


interface TitleProps {
    fontSize?: string;
    color?: string;
    padding?: string;
}

export const TitleStyled = styled.p<TitleProps>`
    margin: 0;
    font-size: ${props => props.fontSize || "15px"};
    color: ${props => props.color || "white"};
    padding: ${props => props.padding || "0"}
`;
