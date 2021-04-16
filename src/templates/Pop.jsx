import React,{useCallback, useState} from 'react';
import {getUserId, getUserName} from "../reducks/users/selectors";
import {useSelector, useDispatch} from "react-redux";
import {push} from "connected-react-router";
import { signOut } from '../reducks/users/operations';

import {Footer} from '../components/UIkit/index'



const Pop = () => {
    const selector = useSelector((state) => state),
          uid = getUserId(selector),
          username = getUserName(selector),
          dispatch = useDispatch();


    console.log(uid)
    return(
        <div className={'wrap'}>
            <header className={'header'}>
                <p>通知</p>
            </header>
            <main className={'pop'} >
                <div className={'userBox'} onClick={() => dispatch(push('/chatroom'))}>
                    <div className={'userBox__txt'}>
                        <p className={'userBox__txt__name'}>乗せてくれる人</p>
                        <p className={'userBox__txt__mess'}>木田浩樹さんから連絡がありました！</p>
                    </div>
                    <div className={'userBox__date'}>
                        <p>最近</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Pop;