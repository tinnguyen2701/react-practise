import styled from "styled-components"
import { isEqual } from 'lodash'
import React from "react";
import { TitleStyled } from "./TitleStyled";
import { postApi } from "../redux/apis";
import { CalendarOutlined, EditFilled, FileImageOutlined } from "@ant-design/icons";
import { Carousel, DatePicker, Tag, TimePicker } from "antd";
import ImageThumbnail from "./image/ImageThumbnail";

const PostDetailStyled = styled.div`
    max-width: 45px;
    min-width: 450px;
    background-color: #232631;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const SectionWrapperStyled = styled.div`
    width: 100%;
    margin-top: 20px;

    .date-time-picker-wrapper {
        display: flex;
        margin-bottom: 10px;
        align-items: center;
        color: white;

        .dot {
            font-size: 25px;
            padding: 0 10px;
        }
    }
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

const DescriptionStyled = styled.div`
    color: #7d7c89;
    background-color: #191c24;
    padding: 10px;
    border-radius: 10px;

    .ant-picker-input {
        flex-direction: row-reverse;
        
        input {
            color: white;
        } 
        
        .ant-picker-suffix {
            color: white;
            margin-right: 10px;
        }
    }

    .date-picker, .time-picker {
        border: none;
        background-color: inherit;
    }
`

export interface PostDetailProps {
    postId: string,
}

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#232631',
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
            <TitleStyled fontSize="20px">
                Post Settings
            </TitleStyled>
            
            <SectionWrapperStyled>
                <TitleStyled 
                    color="#7d7c89"
                    padding="10px 0"
                    fontSize="18px"
                    >Image <FileImageOutlined />
                </TitleStyled>
                {loading ? 
                    <p>...Loading..</p> : 
                    isSuccess && post ?
                    <Carousel>
                        {
                            post.images.map((imgSrc: string, index: number) => (
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
                        
                    </Carousel> :
                    <></> 
                }
            </SectionWrapperStyled>
            
            <SectionWrapperStyled>
                <TitleStyled 
                    color="#7d7c89"
                    padding="10px 0"
                    fontSize="18px">
                        Description <EditFilled />
                </TitleStyled>
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
                <TitleStyled 
                    color="#7d7c89"
                    padding="10px 0"
                    fontSize="18px">
                        Date of Posting <CalendarOutlined />
                </TitleStyled>
                {loading ? 
                    <p>...Loading..</p> : 
                    isSuccess && post ?
                    (
                        post.dateOfPostings.map((date: any, index: number) => (
                            <div className="date-time-picker-wrapper" key={index}>
                                 <DescriptionStyled style={{borderRadius: "25px"}}>
                                     <DatePicker className="date-picker" size="middle" />
                                 </DescriptionStyled>
                                 <span className="dot">&bull;</span>
                                <DescriptionStyled style={{borderRadius: "25px"}}>
                                    <TimePicker className="time-picker"  />
                                </DescriptionStyled>
                            </div>
                        ))) :
                        <></>
                }
            </SectionWrapperStyled>

            <SectionWrapperStyled>
                <TitleStyled 
                    color="#7d7c89"
                    padding="10px 0"
                    fontSize="18px">Tags</TitleStyled>

                {loading ? 
                    <p>...Loading..</p> : 
                    isSuccess && post ?
                    (
                        post.tags.map((tag: any, index: number) => (
                            <TagStyled key={index} closable onClose={log}>
                                {tag.name}
                            </TagStyled>
                        ))) :
                    <></>
                }
                
            </SectionWrapperStyled>

        </PostDetailStyled>
    );
}, isEqual)

  
export default PostDetail;
