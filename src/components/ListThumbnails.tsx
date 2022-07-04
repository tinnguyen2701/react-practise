import React from 'react';
import styled from "styled-components";
import ImageThumbnail from './image/ImageThumbnail';


const ListThumbnailsStyled = styled.div`

`

export interface ListThumbnailsProps {
    images: string[],
}



const ListThumbnails = React.memo(({images}: ListThumbnailsProps) => {
    return (
       <ListThumbnailsStyled>
        {images.map((imageSrc, index) => 
            <ImageThumbnail key={index} src={imageSrc} width="70px" /> 
        )}
       </ListThumbnailsStyled> 
    )})

export default ListThumbnails;