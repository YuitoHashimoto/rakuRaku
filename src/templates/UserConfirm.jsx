import React,{useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router'


const UserConfirm = (props) => {
    const dispatch = useDispatch()
        
    return(
        <div className={'wrap'}>
            <header className={'header'}>
                <svg onClick={() => dispatch(push('/profileimg'))} xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M16 7.1H3.61l6.143-5.837L8.419 0 0 8l8.419 8 1.333-1.266L3.61 8.9H16z" fill="#fff"/></svg>
                <p>登録情報確認</p>
            </header>
            <main className='userConfirm'>
                <div className={'imgUpload'}>
                    <div className={'textArea'}>
                        <p className={'textArea__name'}>木田ひろき</p>
                        <div className={'textArea__tags'}>
                            <p>男</p>
                        </div>
                    </div>
                </div>
                <p className={'poptxt'}>笑顔で<span className={'changeColor'}>自分の顔</span>がはっきり見える写真にしよう</p>
            </main>
            <div className={'footer'} onClick={() => dispatch(push('/'))}>
                <p>完了</p>
            </div>
        </div>
    )
}

export default UserConfirm