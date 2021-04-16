import React,{useCallback, useState} from 'react';
import {getUserId, getUserName} from "../reducks/users/selectors";
import {useSelector, useDispatch} from "react-redux";
import {push} from "connected-react-router";
import { signOut } from '../reducks/users/operations';

// selectインプット
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import {Footer} from '../components/UIkit/index'

// jsonインポート
import {result} from '../json/pref'




const Home = () => {
    const selector = useSelector((state) => state),
          uid = getUserId(selector),
          username = getUserName(selector),
          dispatch = useDispatch(),
          [open, setOpen] = useState(false),
          [openC, setOpenC] = useState(false),
          [data, setData] = useState(''),
          [dataC, setDataC] = useState(''),
          [prefData, setPrefData] = useState(result);


    // セレクトインプット
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleCloseC = () => {
        setOpenC(false);
    };
    const handleOpenC = () => {
        setOpenC(true);
    };


    const inputSelect = useCallback((event) => {
        setData(event.target.value)
        console.log(event.target.value)
    },[setData])

    const inputSelectC = useCallback((event) => {
        setDataC(event.target.value)
        console.log(event.target.value)
    },[setDataC])



    console.log(uid)
    return(
        <div className={'wrap'}>
            <header className={'header'}>
                <p>rakuRaku</p>
            </header>
            <main className={'home c-section-container'}>
                <div className={'homeHead'}>
                    <h2>出発地・目的地</h2>
                    <p></p>
                </div>
                <div className='module-spacer--small' />
                <FormControl className={'wrap__form__content'} id={"formContent"} fullWidth={true}>
                    <InputLabel id="demo-controlled-open-select-label">出発地</InputLabel>
                    <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={data}
                    onChange={inputSelect}
                    >
                    <MenuItem value="">
                        <em>===</em>
                    </MenuItem>
                    {prefData.map((value, index)=>{
                        return<MenuItem value={value.prefName}>{value.prefName}</MenuItem>
                    })}
                    </Select>
                </FormControl>
                <div className='module-spacer--small' />
                <FormControl className={'wrap__form__content'} id={"formContent"} fullWidth={true}>
                    <InputLabel id="demo-controlled-open-select-label">目的地</InputLabel>
                    <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={openC}
                    onClose={handleCloseC}
                    onOpen={handleOpenC}
                    value={dataC}
                    onChange={inputSelectC}
                    >
                    <MenuItem value="">
                        <em>===</em>
                    </MenuItem>
                    {prefData.map((value, index)=>{
                        return<MenuItem value={value.prefName}>{value.prefName}</MenuItem>
                    })}
                    </Select>
                </FormControl>
                <div className={'btnArea'}>
                    <button className={'searchBtn on'}>誰か乗せて</button>
                    <button className={'searchBtn off'}>誰か乗せる</button>
                </div>
                <div className={'homeHead'}>
                    <h2>あなたにおすすめ</h2>
                    <p></p>
                </div>
                <div className={'boardArea'}>
                    <div className={'board'}>
                        <div className={'board__cash'}>
                            <p>予算：2000円〜</p>
                        </div>
                        <div className={'board__main'}>
                            <p className={'board__main__date'}>2020/10/20</p><p className={'board__main__time'}>23:00~</p>
                            <p className={'board__main__pref'}>大阪府大阪市<span>〜</span>神奈川県横浜市</p>
                            <p className={'board__main__txt'}>出張で横浜まで行くことになったので、誰か相乗りしませんか？<br/>仕事の前日には向かうつもりなのでゆっくり行きます。<br/>楽しくおしゃべりしながら行きましょう！</p>
                        </div>
                        <div className={'board__user'}>
                            <div className={'board__user__name'}>
                                <div className={'board__user__name__icon'}></div>
                                <p>木田ひろき</p>
                            </div>
                            <div className={'board__user__rate'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="101.186" height="13.829"><g data-name="グループ 21"><path data-name="パス 13" d="M13.888 5.288a.737.737 0 00-.7-.511H8.953L7.663.762a.737.737 0 00-1.4 0L4.971 4.776H.737a.737.737 0 00-.43 1.335L3.74 8.576l-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/><g data-name="star"><path data-name="パス 13" d="M35.888 5.288a.737.737 0 00-.7-.511h-4.235L29.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/></g><g data-name="star"><path data-name="パス 13" d="M57.888 5.288a.737.737 0 00-.7-.511h-4.235L51.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/></g><g data-name="star"><path data-name="パス 13" d="M78.888 5.288a.737.737 0 00-.7-.511h-4.235L72.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/></g><g data-name="star"><path data-name="パス 13" d="M100.888 5.288a.737.737 0 00-.7-.511h-4.235L94.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="none" stroke="#707070" stroke-width=".5"/></g></g></svg>
                            </div>
                        </div>
                    </div>
                    <div className={'board'}>
                        <div className={'board__cash'}>
                            <p>予算：2000円〜</p>
                        </div>
                        <div className={'board__main'}>
                            <p className={'board__main__date'}>2020/10/20</p><p className={'board__main__time'}>23:00~</p>
                            <p className={'board__main__pref'}>大阪府大阪市<span>〜</span>神奈川県横浜市</p>
                            <p className={'board__main__txt'}>出張で横浜まで行くことになったので、誰か相乗りしませんか？<br/>仕事の前日には向かうつもりなのでゆっくり行きます。<br/>楽しくおしゃべりしながら行きましょう！</p>
                        </div>
                        <div className={'board__user'}>
                            <div className={'board__user__name'}>
                                <div className={'board__user__name__icon'}></div>
                                <p>木田ひろき</p>
                            </div>
                            <div className={'board__user__rate'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="101.186" height="13.829"><g data-name="グループ 21"><path data-name="パス 13" d="M13.888 5.288a.737.737 0 00-.7-.511H8.953L7.663.762a.737.737 0 00-1.4 0L4.971 4.776H.737a.737.737 0 00-.43 1.335L3.74 8.576l-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/><g data-name="star"><path data-name="パス 13" d="M35.888 5.288a.737.737 0 00-.7-.511h-4.235L29.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/></g><g data-name="star"><path data-name="パス 13" d="M57.888 5.288a.737.737 0 00-.7-.511h-4.235L51.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/></g><g data-name="star"><path data-name="パス 13" d="M78.888 5.288a.737.737 0 00-.7-.511h-4.235L72.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/></g><g data-name="star"><path data-name="パス 13" d="M100.888 5.288a.737.737 0 00-.7-.511h-4.235L94.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="none" stroke="#707070" stroke-width=".5"/></g></g></svg>
                            </div>
                        </div>
                    </div>
                    <div className={'board'}>
                        <div className={'board__cash'}>
                            <p>予算：2000円〜</p>
                        </div>
                        <div className={'board__main'}>
                            <p className={'board__main__date'}>2020/10/20</p><p className={'board__main__time'}>23:00~</p>
                            <p className={'board__main__pref'}>大阪府大阪市<span>〜</span>神奈川県横浜市</p>
                            <p className={'board__main__txt'}>出張で横浜まで行くことになったので、誰か相乗りしませんか？<br/>仕事の前日には向かうつもりなのでゆっくり行きます。<br/>楽しくおしゃべりしながら行きましょう！</p>
                        </div>
                        <div className={'board__user'}>
                            <div className={'board__user__name'}>
                                <div className={'board__user__name__icon'}></div>
                                <p>木田ひろき</p>
                            </div>
                            <div className={'board__user__rate'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="101.186" height="13.829"><g data-name="グループ 21"><path data-name="パス 13" d="M13.888 5.288a.737.737 0 00-.7-.511H8.953L7.663.762a.737.737 0 00-1.4 0L4.971 4.776H.737a.737.737 0 00-.43 1.335L3.74 8.576l-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/><g data-name="star"><path data-name="パス 13" d="M35.888 5.288a.737.737 0 00-.7-.511h-4.235L29.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/></g><g data-name="star"><path data-name="パス 13" d="M57.888 5.288a.737.737 0 00-.7-.511h-4.235L51.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/></g><g data-name="star"><path data-name="パス 13" d="M78.888 5.288a.737.737 0 00-.7-.511h-4.235L72.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/></g><g data-name="star"><path data-name="パス 13" d="M100.888 5.288a.737.737 0 00-.7-.511h-4.235L94.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="none" stroke="#707070" stroke-width=".5"/></g></g></svg>
                            </div>
                        </div>
                    </div>
                    <div className={'board'}>
                        <div className={'board__cash'}>
                            <p>予算：2000円〜</p>
                        </div>
                        <div className={'board__main'}>
                            <p className={'board__main__date'}>2020/10/20</p><p className={'board__main__time'}>23:00~</p>
                            <p className={'board__main__pref'}>大阪府大阪市<span>〜</span>神奈川県横浜市</p>
                            <p className={'board__main__txt'}>出張で横浜まで行くことになったので、誰か相乗りしませんか？<br/>仕事の前日には向かうつもりなのでゆっくり行きます。<br/>楽しくおしゃべりしながら行きましょう！</p>
                        </div>
                        <div className={'board__user'}>
                            <div className={'board__user__name'}>
                                <div className={'board__user__name__icon'}></div>
                                <p>木田ひろき</p>
                            </div>
                            <div className={'board__user__rate'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="101.186" height="13.829"><g data-name="グループ 21"><path data-name="パス 13" d="M13.888 5.288a.737.737 0 00-.7-.511H8.953L7.663.762a.737.737 0 00-1.4 0L4.971 4.776H.737a.737.737 0 00-.43 1.335L3.74 8.576l-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/><g data-name="star"><path data-name="パス 13" d="M35.888 5.288a.737.737 0 00-.7-.511h-4.235L29.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/></g><g data-name="star"><path data-name="パス 13" d="M57.888 5.288a.737.737 0 00-.7-.511h-4.235L51.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/></g><g data-name="star"><path data-name="パス 13" d="M78.888 5.288a.737.737 0 00-.7-.511h-4.235L72.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/></g><g data-name="star"><path data-name="パス 13" d="M100.888 5.288a.737.737 0 00-.7-.511h-4.235L94.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="none" stroke="#707070" stroke-width=".5"/></g></g></svg>
                            </div>
                        </div>
                    </div>
                    <div className={'board'}>
                        <div className={'board__cash'}>
                            <p>予算：2000円〜</p>
                        </div>
                        <div className={'board__main'}>
                            <p className={'board__main__date'}>2020/10/20</p><p className={'board__main__time'}>23:00~</p>
                            <p className={'board__main__pref'}>大阪府大阪市<span>〜</span>神奈川県横浜市</p>
                            <p className={'board__main__txt'}>出張で横浜まで行くことになったので、誰か相乗りしませんか？<br/>仕事の前日には向かうつもりなのでゆっくり行きます。<br/>楽しくおしゃべりしながら行きましょう！</p>
                        </div>
                        <div className={'board__user'}>
                            <div className={'board__user__name'}>
                                <div className={'board__user__name__icon'}></div>
                                <p>木田ひろき</p>
                            </div>
                            <div className={'board__user__rate'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="101.186" height="13.829"><g data-name="グループ 21"><path data-name="パス 13" d="M13.888 5.288a.737.737 0 00-.7-.511H8.953L7.663.762a.737.737 0 00-1.4 0L4.971 4.776H.737a.737.737 0 00-.43 1.335L3.74 8.576l-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/><g data-name="star"><path data-name="パス 13" d="M35.888 5.288a.737.737 0 00-.7-.511h-4.235L29.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/></g><g data-name="star"><path data-name="パス 13" d="M57.888 5.288a.737.737 0 00-.7-.511h-4.235L51.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/></g><g data-name="star"><path data-name="パス 13" d="M78.888 5.288a.737.737 0 00-.7-.511h-4.235L72.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="#71c6d3"/></g><g data-name="star"><path data-name="パス 13" d="M100.888 5.288a.737.737 0 00-.7-.511h-4.235L94.663.762a.737.737 0 00-1.4 0l-1.292 4.014h-4.234a.737.737 0 00-.43 1.335l3.433 2.465-1.321 4.013a.737.737 0 001.135.825l3.408-2.5 3.408 2.5a.737.737 0 001.135-.825l-1.322-4.012 3.433-2.465a.737.737 0 00.272-.824z" fill="none" stroke="#707070" stroke-width=".5"/></g></g></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
             <Footer />
        </div>
    );
}

export default Home;