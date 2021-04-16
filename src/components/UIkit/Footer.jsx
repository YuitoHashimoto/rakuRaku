import React from 'react';
import {push} from "connected-react-router";
import {useDispatch} from "react-redux";


const Footer = (props) => {
    const dispatch = useDispatch();


    return(
        <div className={'footer icons'}>
            {/* ホームアイコン */}
            <svg onClick={() => dispatch(push('/'))} xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
                <g id="グループ_17" data-name="グループ 17" transform="translate(-43 -746)">
                    <path id="パス_10" data-name="パス 10" d="M0,0H46V46H0Z" transform="translate(43 746)" fill="none"/>
                    <path id="パス_4" data-name="パス 4" d="M61.767,8.005h0L54.085.8a2.973,2.973,0,0,0-4.067,0l-7.681,7.2a2.973,2.973,0,0,0-.94,2.169V22.447a2.974,2.974,0,0,0,2.974,2.974H59.733a2.974,2.974,0,0,0,2.974-2.974V10.175A2.975,2.975,0,0,0,61.767,8.005ZM60.339,22.447a.607.607,0,0,1-.606.606h-5.05V17.791H49.421v5.261h-5.05a.605.605,0,0,1-.606-.606V10.175a.6.6,0,0,1,.191-.442l7.682-7.2a.605.605,0,0,1,.828,0l7.682,7.2h0a.606.606,0,0,1,.192.442V22.447Z" transform="translate(13.603 747.8)" fill="#fff"/>
                    <text id="ホーム" transform="translate(66 786)" fill="#fff" font-size="8" font-family="HiraginoSans-W3, Hiragino Sans"><tspan x="-11.8" y="0">ホーム</tspan></text>
                </g>
            </svg>
            {/* チャットアイコン */}
            <svg onClick={() => dispatch(push('/chat'))} xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
                <g id="グループ_18" data-name="グループ 18" transform="translate(-130 -746)">
                    <rect id="長方形_12" data-name="長方形 12" width="46" height="46" transform="translate(130 746)" fill="none"/>
                    <g id="chat" transform="translate(139 750.8)">
                    <path id="パス_5" data-name="パス 5" d="M115.147,200.464a1.463,1.463,0,1,0,1.462,1.463A1.463,1.463,0,0,0,115.147,200.464Z" transform="translate(-107.842 -193.307)" fill="#fff"/>
                    <path id="パス_6" data-name="パス 6" d="M228.993,200.464a1.463,1.463,0,1,0,1.463,1.463A1.462,1.462,0,0,0,228.993,200.464Z" transform="translate(-215.838 -193.307)" fill="#fff"/>
                    <path id="パス_7" data-name="パス 7" d="M342.823,200.464a1.463,1.463,0,1,0,1.463,1.463A1.462,1.462,0,0,0,342.823,200.464Z" transform="translate(-323.819 -193.307)" fill="#fff"/>
                    <path id="パス_8" data-name="パス 8" d="M26.308,69.649a8.554,8.554,0,0,0-2.5-5.986,8.374,8.374,0,0,0-5.979-2.483H8.478a8.477,8.477,0,1,0,0,16.955h7.7a.26.26,0,0,1,.22.1.355.355,0,0,1,.032.3,3.649,3.649,0,0,1-.415.809c-.187.308-.359.568-.4.623-.261.391-.351.723-.253.934a.629.629,0,0,0,.545.291,3.351,3.351,0,0,0,.36.019c.066,0,.132,0,.189-.007a11.286,11.286,0,0,0,2.345-.429,10.5,10.5,0,0,0,4.924-3.115,11.672,11.672,0,0,0,2.579-7.814Zm-2.623,5.3a8.257,8.257,0,0,1-3.915,3.792,9.888,9.888,0,0,1-1.893.673l-.171.042.111-.242a2.8,2.8,0,0,0,.113-.265,2.085,2.085,0,0,0,.125-.659,1.551,1.551,0,0,0-.143-.649,1.7,1.7,0,0,0-.786-.789,2.829,2.829,0,0,0-1.29-.267H8.478a6.929,6.929,0,0,1,0-13.859h9.353a6.856,6.856,0,0,1,4.883,2.028,7.025,7.025,0,0,1,2.048,4.908v.173A11.352,11.352,0,0,1,23.685,74.949Z" transform="translate(0 -61.18)" fill="#fff"/>
                    </g>
                    <text id="チャット" transform="translate(153 786)" fill="#fff" font-size="8" font-family="HiraginoSans-W3, Hiragino Sans"><tspan x="-16" y="0">チャット</tspan></text>
                </g>
            </svg>
            {/* 通知アイコン */}
            <svg onClick={() => dispatch(push('/pop'))} xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
                <g id="グループ_19" data-name="グループ 19" transform="translate(-216 -746)">
                    <rect id="長方形_13" data-name="長方形 13" width="46" height="46" transform="translate(216 746)" fill="none"/>
                    <path id="パス_9" data-name="パス 9" d="M55.073,18.193a18.684,18.684,0,0,1-1.58-3.013,15.556,15.556,0,0,1-.955-4.063,13.662,13.662,0,0,0-.774-3.348,8.315,8.315,0,0,0-1.037-1.941,5.974,5.974,0,0,0-2.247-1.9,5.831,5.831,0,0,0-.962-.363h0A2.762,2.762,0,0,0,47.58,1.5,2.416,2.416,0,0,0,46.8.421,1.974,1.974,0,0,0,45.59,0a1.941,1.941,0,0,0-.842.194,2.256,2.256,0,0,0-.95.89,2.69,2.69,0,0,0-.369,1.375,2.741,2.741,0,0,0,.17.957c.019.053.04.1.063.154h0a5.957,5.957,0,0,0-.668.23,5.754,5.754,0,0,0-1.638,1.029,7.23,7.23,0,0,0-1.794,2.584,13.125,13.125,0,0,0-.919,3.706,15.589,15.589,0,0,1-.956,4.063,18.749,18.749,0,0,1-1.579,3.013,4.234,4.234,0,0,0-.626,2.214A3.988,3.988,0,0,0,35.63,21.5a2.991,2.991,0,0,0,.759,1.331,2.064,2.064,0,0,0,.616.42,1.827,1.827,0,0,0,.736.154h4.649a4.026,4.026,0,0,0,.236,1.053,3.622,3.622,0,0,0,1.164,1.609,2.95,2.95,0,0,0,1.8.625,2.881,2.881,0,0,0,1.252-.288,3.365,3.365,0,0,0,1.416-1.325A3.962,3.962,0,0,0,48.79,23.4h4.648a1.848,1.848,0,0,0,.957-.269,2.243,2.243,0,0,0,.566-.49,3.07,3.07,0,0,0,.548-1.019,3.929,3.929,0,0,0,.188-1.217A4.241,4.241,0,0,0,55.073,18.193ZM44.9,2.125a.848.848,0,0,1,.273-.377.686.686,0,0,1,.42-.145.675.675,0,0,1,.292.067.793.793,0,0,1,.332.311.928.928,0,0,1,.128.478.948.948,0,0,1-.059.333.845.845,0,0,1-.273.377.68.68,0,0,1-.42.146.669.669,0,0,1-.293-.067.786.786,0,0,1-.332-.311.934.934,0,0,1-.128-.478A.949.949,0,0,1,44.9,2.125ZM38.971,15.835a17.375,17.375,0,0,0,1.068-4.513,11.912,11.912,0,0,1,.667-2.912,6.662,6.662,0,0,1,.828-1.556A4.535,4.535,0,0,1,43.247,5.4a5.351,5.351,0,0,1,2.343-.49A5.489,5.489,0,0,1,47.7,5.3a4.37,4.37,0,0,1,1.25.785,5.637,5.637,0,0,1,1.4,2.026,11.41,11.41,0,0,1,.787,3.209,17.377,17.377,0,0,0,1.068,4.513A17.018,17.018,0,0,0,53.3,18.08H37.877A16.993,16.993,0,0,0,38.971,15.835Zm8.286,7.993a2.035,2.035,0,0,1-.657.906,1.642,1.642,0,0,1-1.01.35,1.613,1.613,0,0,1-.7-.161,1.9,1.9,0,0,1-.8-.746,2.2,2.2,0,0,1-.28-.777h3.559A2.239,2.239,0,0,1,47.257,23.829ZM54.208,21a1.37,1.37,0,0,1-.334.607.694.694,0,0,1-.205.142.56.56,0,0,1-.23.048H37.74a.577.577,0,0,1-.3-.084.786.786,0,0,1-.2-.178,1.405,1.405,0,0,1-.248-.47,2.146,2.146,0,0,1-.1-.661,2.464,2.464,0,0,1,.306-1.183H53.984a2.47,2.47,0,0,1,.305,1.183A2.169,2.169,0,0,1,54.208,21Z" transform="translate(193.519 748)" fill="#fff"/>
                    <text id="通知" transform="translate(239 786)" fill="#fff" font-size="8" font-family="HiraginoSans-W3, Hiragino Sans"><tspan x="-8" y="0">通知</tspan></text>
                </g>
            </svg>
            {/* マイページ */}
            <svg onClick={() => dispatch(push('/mypage'))} xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
                <g id="グループ_20" data-name="グループ 20" transform="translate(-296 -746)">
                    <rect id="長方形_10" data-name="長方形 10" width="46" height="46" transform="translate(296 746)" fill="none"/>
                    <g id="human" transform="translate(310 750)">
                    <path id="パス_3" data-name="パス 3" d="M40.608,8.822C40.424,3.873,36.73,0,32.185,0S23.933,3.934,23.76,8.841c-.582,1.242-1.631,3.575-1.679,3.682a2.37,2.37,0,0,0-.024,1.9A2.066,2.066,0,0,0,23.4,15.642l.384.105c.186.917.466,2.3.554,2.74.331,1.66,1.13,2.368,2.672,2.368a6.11,6.11,0,0,0,.643-.036v1.564H37.9V18.046a4.214,4.214,0,0,1,.719-2.465A9.927,9.927,0,0,0,40.608,8.822Zm-2.991,5.852A5.728,5.728,0,0,0,36.6,18.046v2.917H28.96V19.12a8.1,8.1,0,0,1-1.945.315c-.891,0-1.2-.223-1.4-1.25-.135-.678-.729-3.6-.729-3.6l-1.165-.318a.74.74,0,0,1-.48-.435.85.85,0,0,1,.01-.681s1.274-2.834,1.805-3.95c0-4.3,3.193-7.778,7.13-7.778,3.846,0,6.979,3.324,7.123,7.483A8.42,8.42,0,0,1,37.617,14.674Z" transform="translate(-21.87)" fill="#fff"/>
                    </g>
                    <text id="マイページ" transform="translate(319 786)" fill="#fff" font-size="8" font-family="HiraginoSans-W3, Hiragino Sans"><tspan x="-19.24" y="0">マイページ</tspan></text>
                </g>
            </svg>

        </div>

    )
}

export default Footer