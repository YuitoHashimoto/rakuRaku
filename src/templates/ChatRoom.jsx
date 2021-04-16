import React,{useCallback, useState} from 'react';
import {getUserId, getUserName} from "../reducks/users/selectors";
import {useSelector, useDispatch} from "react-redux";
import {push} from "connected-react-router";
import { signOut } from '../reducks/users/operations';

import {Footer} from '../components/UIkit/index'



const ChatRoom = () => {
    const selector = useSelector((state) => state),
          uid = getUserId(selector),
          username = getUserName(selector),
          dispatch = useDispatch();


    console.log(uid)
    return(
        <div className={'wrap'}>
            <header className={'header'}>
                <svg onClick={() => dispatch(push('/chat'))} xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M16 7.1H3.61l6.143-5.837L8.419 0 0 8l8.419 8 1.333-1.266L3.61 8.9H16z" fill="#fff"/></svg>
                <p>木田ひろき</p>
            </header>
            <main className={'chatRoom'}>
                <div className={'messBox'}>
                    <div className={'messBox__icon'}></div>
                    <div className={'messBox__mess'}>
                        <p>あそぼ！のろう！どっかいこう！</p>
                    </div>
                </div>
            </main>
            <div className={'chatFooter'}>
                <input type="text" placeholder={"メッセージを入力"}/>
                <svg className={'submitBtn'} xmlns="http://www.w3.org/2000/svg" width="12" height="19"><g data-name="多角形 3" fill="none"><path d="M12 9.5L0 19V0z"/><path d="M10.389 9.5L1 2.067v14.866L10.389 9.5M12 9.5L0 19V0l12 9.5z" fill="#71c6d3"/></g></svg>
            </div>
        </div>
    );
}

export default ChatRoom;