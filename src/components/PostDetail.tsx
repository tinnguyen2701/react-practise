import styled from "styled-components"
import React from "react";
import { TitleStyled } from "./TitleStyled";
import { postApi } from "../redux/apis";
import { CalendarOutlined, EditFilled, FileImageOutlined } from "@ant-design/icons";
import ListTags from "./ListTags";
import DateTimePicker from "./DateTimePicker";
import Carousel from "./Carousel";


const PostDetailWrapperStyled = styled.div`
    background-color: #1a1c20;
`

const PostDetailStyled = styled.div`
    max-width: 45px;
    min-width: 450px;
    background-color: #232631;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
`;

const SectionWrapperStyled = styled.div`
    width: 100%;
    margin-top: 20px;
`

export const DescriptionStyled = styled.div`
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


  export const PostDetail = ({postId, ...props}: PostDetailProps) => {
    const { isLoading, isFetching, isSuccess } = postApi.endpoints.getPostById.useQuery(postId, {
        skip: false,
        refetchOnMountOrArgChange: true,
      });
    
    const loading = isLoading || isFetching;

    const post = postApi.endpoints.getPostById.useQueryState(postId, {
    selectFromResult: ({ data }) => data
    });

    return (
        <PostDetailWrapperStyled>
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
                        <Carousel images={post.images} />
                        :
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
                                <DateTimePicker day={date.day} time={date.time} key={index} />
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
                            <ListTags tags={post.tags} /> :
                            <></>
                    }
                    
                </SectionWrapperStyled>

            </PostDetailStyled>
        </PostDetailWrapperStyled>
    );
}

  
export default PostDetail;
