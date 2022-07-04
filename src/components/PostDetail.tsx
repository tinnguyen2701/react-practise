import styled from "styled-components"
import { isEqual } from 'lodash'
import React from "react";
import { TitleStyled } from "./TitleStyled";
import { postApi } from "../redux/apis";
import { CalendarOutlined, EditFilled, FileImageOutlined } from "@ant-design/icons";
import { Carousel, Tag } from "antd";
import ImageThumbnail from "./image/ImageThumbnail";

const PostDetailStyled = styled.div`
    border: 1px solid tomato;
    width: 500px;
`;

const SectionWrapperStyled = styled.div`
    border: 1px solid tomato;    
`

const DescriptionStyled = styled.div`
    border: 1px solid tomato;    
`

export interface PostDetailProps {
    postId: string,
}

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  export const PostDetail = React.memo(({postId, ...props}: PostDetailProps) => {
    const { isLoading, isFetching, isSuccess } = postApi.endpoints.getPostById.useQuery(postId, {
        skip: false,
        refetchOnMountOrArgChange: true,
      });
    
      const loading = isLoading || isFetching;
    
      const post = postApi.endpoints.getPostById.useQueryState(postId, {
        selectFromResult: ({ data }) => data
      });
    

      const log = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
      };

    return (
        <PostDetailStyled>
            <TitleStyled>
                Post Settings
            </TitleStyled>
            
            <SectionWrapperStyled>
                <TitleStyled>Image <FileImageOutlined /></TitleStyled>
                {loading ? 
                    <p>...Loading..</p> : 
                    isSuccess && post ?
                    <Carousel>
                        {
                            post.images.map((imgSrc: string, index: number) => (
                                <div key={index} style={contentStyle}>
                                    <ImageThumbnail src={imgSrc} width="100px" height="70"/>
                                </div>
                            ))
                        }
                        
                    </Carousel> :
                    <></> 
                }
            </SectionWrapperStyled>
            
            <SectionWrapperStyled>
                <TitleStyled>Description <EditFilled /></TitleStyled>
                {loading ? 
                    <p>...Loading..</p> : 
                    isSuccess && post ?
                    <DescriptionStyled>
                        {post.description}
                    </DescriptionStyled> :
                    <></> 
                }
            </SectionWrapperStyled>

            
            <SectionWrapperStyled>
                <TitleStyled>Date of Posting <CalendarOutlined /></TitleStyled>
                {loading ? 
                    <p>...Loading..</p> : 
                    isSuccess && post ?
                    (
                        post.dateOfPostings.map((date: any, index: number) => (
                            <div key={index}>
                                <DescriptionStyled>
                                    {date}
                                </DescriptionStyled>
                            </div>
                        ))) :
                        <></>
                }
            </SectionWrapperStyled>


            <SectionWrapperStyled>
                <TitleStyled>Tags</TitleStyled>

                {loading ? 
                    <p>...Loading..</p> : 
                    isSuccess && post ?
                    (
                        post.tags.map((tag: any, index: number) => (
                            <Tag key={index} closable onClose={log}>
                                {tag.name}
                            </Tag>
                        ))) :
                    <></>
                }
                
            </SectionWrapperStyled>

        </PostDetailStyled>
    );
}, isEqual)

  
export default PostDetail;
