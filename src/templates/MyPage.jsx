import React,{useCallback, useState} from 'react';
import {getUserId, getUserName} from "../reducks/users/selectors";
import {useSelector, useDispatch} from "react-redux";
import {push} from "connected-react-router";
import { signOut } from '../reducks/users/operations';

import {Footer} from '../components/UIkit/index'



const MyPage = () => {
    const selector = useSelector((state) => state),
          uid = getUserId(selector),
          username = getUserName(selector),
          dispatch = useDispatch();


    console.log(uid)
    return(
        <div className={'wrap'}>
            <header className={'header'}>
                <p>マイページ</p>
            </header>
            <main className={'mypage c-section-container'}>
                <div className={'imgUpload'}>
                    <div className={'textArea'}>
                        <p className={'textArea__name'}>木田ひろき</p>
                        <div className={'textArea__tags'}>
                            <p>男</p>
                        </div>
                    </div>
                </div>
                <div className={'statP'}>
                    <h2>紹介文</h2>
                    <label >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><text data-name="＋" transform="translate(0 11)" fill="#71c6d3" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans"><tspan x="0" y="0">＋</tspan></text></svg>
                        <input type="text" placeholder={"紹介文を入力"}/>
                    </label>
                </div>
                <div className={'statP'}>
                    <h2>ステータス</h2>
                    <label >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><text data-name="＋" transform="translate(0 11)" fill="#71c6d3" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans"><tspan x="0" y="0">＋</tspan></text></svg>
                        <input type="text" placeholder={"職業"}/>
                    </label>
                    <label >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><text data-name="＋" transform="translate(0 11)" fill="#71c6d3" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans"><tspan x="0" y="0">＋</tspan></text></svg>
                        <input type="text" placeholder={"運転歴"}/>
                    </label>
                    <label >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><text data-name="＋" transform="translate(0 11)" fill="#71c6d3" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans"><tspan x="0" y="0">＋</tspan></text></svg>
                        <input type="text" placeholder={"事故歴"}/>
                    </label>
                    <label >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><text data-name="＋" transform="translate(0 11)" fill="#71c6d3" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans"><tspan x="0" y="0">＋</tspan></text></svg>
                        <input type="text" placeholder={"愛用者"}/>
                    </label>
                    <label >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><text data-name="＋" transform="translate(0 11)" fill="#71c6d3" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans"><tspan x="0" y="0">＋</tspan></text></svg>
                        <input type="text" placeholder={"出身地"}/>
                    </label>
                </div>
                <div className={'statP'}>
                    <h2>趣味</h2>
                    <label >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><text data-name="＋" transform="translate(0 11)" fill="#71c6d3" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans"><tspan x="0" y="0">＋</tspan></text></svg>
                        <input type="text" placeholder={"好きなスポーツ"}/>
                    </label>
                    <label >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><text data-name="＋" transform="translate(0 11)" fill="#71c6d3" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans"><tspan x="0" y="0">＋</tspan></text></svg>
                        <input type="text" placeholder={"好きな音楽"}/>
                    </label>
                    <label >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><text data-name="＋" transform="translate(0 11)" fill="#71c6d3" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans"><tspan x="0" y="0">＋</tspan></text></svg>
                        <input type="text" placeholder={"好きな食べ物"}/>
                    </label>
                    <label >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><text data-name="＋" transform="translate(0 11)" fill="#71c6d3" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans"><tspan x="0" y="0">＋</tspan></text></svg>
                        <input type="text" placeholder={"好きな映画"}/>
                    </label>
                    <label >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><text data-name="＋" transform="translate(0 11)" fill="#71c6d3" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans"><tspan x="0" y="0">＋</tspan></text></svg>
                        <input type="text" placeholder={"好きな本やアニメ"}/>
                    </label>
                    <label >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><text data-name="＋" transform="translate(0 11)" fill="#71c6d3" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans"><tspan x="0" y="0">＋</tspan></text></svg>
                        <input type="text" placeholder={"旅行したことある場所"}/>
                    </label>
                </div>
                <button className={'upBtn'}>変更を保存</button>
            </main>
            <Footer />
        </div>
    );
}

export default MyPage;