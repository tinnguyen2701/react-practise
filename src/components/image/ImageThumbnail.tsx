import styled from "styled-components"

const ImageThumbnailStyled = styled.img`
    
`;

export interface ImageProps {
  src: string,
  alt?: string,
  width: string,
  height?: string,
}

const ImageThumbnail = ({src, width, alt = "image"}: ImageProps) => {
  return (
    <ImageThumbnailStyled src={src} alt={alt} width={width} />
  );
};

export default ImageThumbnail;
