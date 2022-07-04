import styled from "styled-components"
import { ImageProps } from "./ImageThumbnail";

const ImageCircleStyled = styled.img`
    border-radius: 100%;
`;


const ImageCircle = ({src, alt = "image", width}: ImageProps) => {
  return (
    <ImageCircleStyled src={src} alt={alt} width={width} height={width} />
  );
};

export default ImageCircle;
