import { signInAction, signOutAction } from "./actions";
import {push} from "connected-react-router";
import {auth, FirebaseTimestamp, db} from "../../firebase/index"

export const listenAuthState = () => {
    return async (dispatch) => {
        return auth.onAuthStateChanged(user => {
            if (user) {
                const uid = user.uid
                db.collection('users').doc(uid).get()
                .then(snapshot => {
                    const data = snapshot.data()

                    dispatch(signInAction({
                        isSignedIn: true,
                        role: data.role,
                        uid: uid,
                        username: data.username
                    }))

                })
            } else {
                dispatch(push('/firstview'));
            }
        })
    }
}

export const resetPassword = (email) => {
    return async (dispatch) => {
        if (email === "") {
            alert("必須項目が未入力です！")
            return false
        } else {
            auth.sendPasswordResetEmail(email)
                .then(() => {
                    alert('入力されたアドレスにパスワードリセット用のメールを送りました。')
                    dispatch(push('/signin'))
                }).catch(() => {
                    alert('パスワードリセットに失敗しました。')
                })
        }
    }
}

export const signIn = (email, password) => {
    return async (dispatch) => {
        // Validation
        if (email === "" || password === "") {
            alert ("必須項目が未入力です")
            return false
        }
        
        auth.signInWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user

                if (user) {
                    const uid = user.uid
                    db.collection('users').doc(uid).get()
                    .then(snapshot => {
                        const data = snapshot.data()

                        dispatch(signInAction({
                            isSignedIn: true,
                            role: data.role,
                            uid: uid,
                            username: data.username
                        }))

                        dispatch(push('/profileimg'));
                    })
                } 
            }) 
    }
}

export const signUp = (email, password, confirmPassword, username, data) => {
    return async (dispatch) => {
        // Validation
        if (username === "" || email === "" || password === "" || confirmPassword === "" || data === "" ) {
            alert ("必須項目が未入力です")
            return false
        }

        if (password !== confirmPassword) {
            alert ("パスワードが一致しません。もう一度お試しください。")
        }

        return auth.createUserWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user
                if (user) {
                    const uid = user.uid
                    const timestamp = FirebaseTimestamp.now()

                    const userInitialData = {
                        crewated_at: timestamp,
                        email: email,
                        updated_at: timestamp,
                        username: username,
                        sex: data,
                        status: "",
                        role: "",
                        drive: "",
                        accident: "",
                        car: "",
                        birthplace: "",
                        sport: "",
                        music: "",
                        movie: "",
                        books: "",
                        travel: "",
                    }

                    db.collection('rakuUsers').doc(uid).set(userInitialData)
                        .then(() => {
                            // signIn(email, password);
                            dispatch(push('/profileimg'))
                        }) 
                }
            })
    }
}

export const signOut = () => {
    return async (dispatch) => {
        auth.signOut()
            .then(() => {
                dispatch(signOutAction());
                dispatch(push('/signin'))
            })
    }
}