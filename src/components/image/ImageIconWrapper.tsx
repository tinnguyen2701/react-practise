import styled from "styled-components"
import ImageCircle from "./ImageCircle";

const ImageIconWrapperStyled = styled.span`
  position: relative;
  margin-right: 20px;

  img:last-child {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export interface ImageIconWrapperProps {
  primarySrc: string,
  secondarySrc: string,
  primaryWidth: string,
  secondaryWidth: string
}
  

const ImageIconWrapper = ({primarySrc, secondarySrc, primaryWidth, secondaryWidth}: ImageIconWrapperProps) => {
  return (
    <ImageIconWrapperStyled>
        <ImageCircle src={primarySrc} width={primaryWidth} />
        <ImageCircle src={secondarySrc} width={secondaryWidth} />
    </ImageIconWrapperStyled>
  );
};

export default ImageIconWrapper;
