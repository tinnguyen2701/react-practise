import styled from "styled-components"

const ImageThumbnailStyled = styled.img<ImageProps>`
    border-radius: ${props => props.borderRadius || "0"};
`;

export interface ImageProps {
  src: string,
  alt?: string,
  width: string,
  height?: string,
  borderRadius?: string
}

const ImageThumbnail = ({src, width, height, borderRadius, alt = "image"}: ImageProps) => {
  return (
    <ImageThumbnailStyled 
      src={src} 
      alt={alt} 
      width={width} 
      height={height}
      borderRadius={borderRadius} />
  );
};

export default ImageThumbnail;
