import { Tag } from 'antd';
import React from 'react';
import styled from "styled-components";


const ListTagsStyled = styled.div`
`


const TagStyled = styled(Tag)`
    background-color: #4158D0;
    background-image: linear-gradient(43deg,#4158D0 0%,#C850C0 46% 100%);
    border-radius: 20px;
    margin-bottom: 10px;
    color: #fffafa;
    border: none;
    padding: 10px 20px;
    font-size: 16px;

    > span {
        border: 1px solid white;
        padding: 3px;
        border-radius: 50%;
        
        svg {
            color: #fffafa;
        }
    }
`

export interface ListTagsProps {
    tags: any,
}

export const ListTags = React.memo(({tags}: ListTagsProps) => {
    const log = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
    };

    return (
        <ListTagsStyled>
        {
            tags && tags.map((tag: any, index: number) => (
                <TagStyled key={index} closable onClose={log}>
                    {tag.name}
                </TagStyled>
            ))
        }
        </ListTagsStyled>
    )})

export default ListTags;