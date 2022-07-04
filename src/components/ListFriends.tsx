import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import styled from "styled-components";
import { useGetListFiendsQuery } from '../redux/apis/userApi';
import { IUser } from '../types';
import { AppUtil } from '../utils/appUtil';
import ButtonWrapped from './button/ButtonWrapped';
import ImageIconWrapper from './image/ImageIconWrapper';


const ListFriendsStyled = styled.div`

`

export interface ListFriendProps {
    users: IUser[],
}



export const ListFriends = React.memo(() => {
  const { data: users, isLoading } = useGetListFiendsQuery({});
    
return (
    <ListFriendsStyled>
    {
        isLoading ? 
            <p>...Loading...</p> : (
            <>
                {users.map((user: IUser, index: number) => {
                    var secondarySrc = AppUtil.getPathImageIcon(user.typeIcon);
                    
                    return (
                        <ImageIconWrapper 
                            key={index}
                            primarySrc={user.avatar}
                            primaryWidth="50px"
                            secondarySrc={secondarySrc}
                            secondaryWidth="30px"
                        />
                    )
                })}

                <span>
                    <ButtonWrapped onClick={() => {}}><PlusOutlined /></ButtonWrapped>
                </span>
            </>)
    }
    </ListFriendsStyled>
)})

export default ListFriends;