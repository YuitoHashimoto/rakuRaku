import React,{useCallback, useState} from 'react';
import {PrimaryButton, TextInput, InputSelect} from "../components/UIkit/index";
import {signUp} from "../reducks/users/operations";
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router'

// スタイル
import "../assets/sass/main.scss";


// selectインプット
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const SignUp = (props) => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState(""),
          [email, setEmail] = useState(""),
          [password, setPassword] = useState(""),
          [confirmPassword, setConfirmPassword] = useState(""),
          [open, setOpen] = useState(false),
          [data, setData] = useState('');

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    

    const inputUsername = useCallback((event) => {
        setUsername(event.target.value)
    },[setUsername])

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
    },[setEmail])

    const inputPassword = useCallback((event) => {
        setPassword(event.target.value)
    },[setPassword])

    const inputConfirmPassword = useCallback((event) => {
        setConfirmPassword(event.target.value)
    },[setConfirmPassword])

    const inputSelect = useCallback((event) => {
        setData(event.target.value)
        console.log(event.target.value)
    },[setData])

    
    
    return(
        <div className={'wrap'}>
            <header className={'header'}>
                <svg onClick={() => dispatch(push('/firstview'))} xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M16 7.1H3.61l6.143-5.837L8.419 0 0 8l8.419 8 1.333-1.266L3.61 8.9H16z" fill="#fff"/></svg>
                <p>新規登録</p>
            </header>
            <main className='c-section-container'>
                <TextInput
                    fullWidth={true} label={"ユーザー名"} multiline={false} required={true}
                    rows={1} value={username} type={"text"} onChange={inputUsername}
                />
                <div className='module-spacer--extra-extra-small' />

                <TextInput
                    fullWidth={true} label={"メールアドレス"} multiline={false} required={true}
                    rows={1} value={email} type={"email"} onChange={inputEmail}
                />
                <div className='module-spacer--extra-extra-small' />

                <TextInput
                    fullWidth={true} label={"パスワード"} multiline={false} required={true}
                    rows={1} value={password} type={"password"} onChange={inputPassword}
                />
                <div className='module-spacer--extra-extra-small' />

                <TextInput
                    fullWidth={true} label={"確認パスワード"} multiline={false} required={true}
                    rows={1} value={confirmPassword} type={"password"} onChange={inputConfirmPassword}
                />
                <div className='module-spacer--extra-extra-small' />

                {/* 性別セレクト */}
                <FormControl className={'wrap__form__content'} id={"formContent"} fullWidth={true}>
                    <InputLabel id="demo-controlled-open-select-label">性別</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" open={open}
                        onClose={handleClose} onOpen={handleOpen} value={data} onChange={inputSelect}
                    >
                        <MenuItem value={"男"}>
                            男
                        </MenuItem>
                        <MenuItem value={"女"}>
                            女
                        </MenuItem>
                        <MenuItem value={"指定なし"}>
                            指定なし
                        </MenuItem>
                    </Select>
                </FormControl>

                {/* <div className='center'>
                    <PrimaryButton 
                        label={"Sign In."}
                        onClick={() => dispatch(signUp(email, password, confirmPassword, username, data))}
                    />
                </div> */}

            </main>
            <div onClick={() => dispatch(signUp(email, password, confirmPassword, username, data))} className={'footer'}>
                <p >次へ</p>
            </div>
        </div>
    )
}

export default SignUp