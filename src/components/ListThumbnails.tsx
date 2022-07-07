import React from 'react';
import styled from "styled-components";
import ImageThumbnail from './image/ImageThumbnail';


const ListThumbnailsStyled = styled.div`
    display: flex;
    overflow: hidden;
    
    > img:not(first-child) {
        margin-left: -10px;
    }
`

export interface ListThumbnailsProps {
    images: string[],
    width: string,
    height: string,
    borderRadius?: string
}

const ListThumbnails = React.memo(({images, width, height, borderRadius}: ListThumbnailsProps) => {
    return (
       <ListThumbnailsStyled>
        {images && images.map((imageSrc, index) => 
            <ImageThumbnail 
                key={index} 
                src={imageSrc} 
                width={width}
                height={height}
                borderRadius={borderRadius} /> 
        )}
       </ListThumbnailsStyled> 
    )})

export default ListThumbnails;