import React from 'react';
import styled from "styled-components";
import { Carousel as CarouselAntd } from "antd";
import ImageThumbnail from './image/ImageThumbnail';



const CarouselStyled = styled(CarouselAntd)`
    
`

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#232631',
};

export interface CarouselProps {
    images: string[],
}

export const Carousel = React.memo(({images}: CarouselProps) => {

    return (
        <CarouselStyled>
        {
            images && images.map((imgSrc: string, index: number) => (
                <div key={index} style={contentStyle}>
                    <ImageThumbnail 
                        src={imgSrc} 
                        width="100%" 
                        height="200px"
                        borderRadius="10px"
                        />
                </div>
            ))
        }
        </CarouselStyled>
    )})

export default Carousel;