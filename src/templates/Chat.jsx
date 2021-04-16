import React,{useCallback, useState} from 'react';
import {getUserId, getUserName} from "../reducks/users/selectors";
import {useSelector, useDispatch} from "react-redux";
import {push} from "connected-react-router";
import { signOut } from '../reducks/users/operations';

import {Footer} from '../components/UIkit/index'



const Chat = () => {
    const selector = useSelector((state) => state),
          uid = getUserId(selector),
          username = getUserName(selector),
          dispatch = useDispatch();


    console.log(uid)
    return(
        <div className={'wrap'}>
            <header className={'header'}>
                <p>チャット</p>
            </header>
            <main className={'chat'} >
                <div className={'userBox'} onClick={() => dispatch(push('/chatroom'))}>
                    <div className={'userBox__icon'}></div>
                    <div className={'userBox__txt'}>
                        <p className={'userBox__txt__name'}>木田ひろき</p>
                        <p className={'userBox__txt__mess'}>あそぼ！のろう！どっか行こう！</p>
                    </div>
                    <div className={'userBox__date'}>
                        <p>1日前</p>
                    </div>
                </div>
                <div className={'userBox'}>
                    <div className={'userBox__icon two'}></div>
                    <div className={'userBox__txt'}>
                        <p className={'userBox__txt__name'}>橋本ゆいと</p>
                        <p className={'userBox__txt__mess'}>日程決めましょう！！</p>
                    </div>
                    <div className={'userBox__date'}>
                        <p>1日前</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Chat;