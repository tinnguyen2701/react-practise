import React from 'react';
import styled from "styled-components";
import { useAppSelector } from '../hooks/appHook';
import { useGetListFiendsQuery } from '../redux/apis/userApi';
import { IUser } from '../types';
import { AppUtil } from '../utils/appUtil';
import ButtonAddPlus from './button/ButtonAddPlus';
import ImageIconWrapper from './image/ImageIconWrapper';


const ListFriendsStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
`

export interface ListFriendProps {
    users: IUser[],
}

export const ListFriends = React.memo(() => {
    const currentUser = useAppSelector(state => state.userState.user)
  
    const { data: users, isLoading } = useGetListFiendsQuery(currentUser.id);
    
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
                                primaryWidth="60px"
                                secondarySrc={secondarySrc}
                                secondaryWidth="20px"
                            />
                        )
                    })}

                    <ButtonAddPlus />
                </>)
        }
        </ListFriendsStyled>
    )})

export default ListFriends;