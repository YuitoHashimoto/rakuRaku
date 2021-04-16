import React from 'react';
import {getUserId, getUserName} from "../reducks/users/selectors";
import {useSelector, useDispatch} from "react-redux";
import {push} from "connected-react-router";

// スタイル
import "../assets/sass/firstView.scss";


const FirstView = () => {
    const selector = useSelector((state) => state)
    const uid = getUserId(selector)
    const dispatch = useDispatch()

    return(
        <>
            <main className={'main'}>
                <h1><span className={'changeColor'}>r</span>aku<span className={'changeColor'}>R</span>aku</h1>
                <div className={'main__logo'}></div>
                <div className={'main__link'}>
                    <button onClick={() => dispatch(push('/signup'))}>メールアドレスで登録する</button>
                    <p>電話番号で登録する</p>
                </div>
                <p className={'main__small'}>ログインすることはrakuRakuの<span className={'changeColor'}>利用規約</span>に同意したことになります。</p>
            </main>
        </>
    );
}

export default FirstView;