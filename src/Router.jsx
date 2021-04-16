import React from 'react';
import {Route, Switch} from "react-router";
import Auth from './Auth'
import {Home, SignIn,  SignUp, Reset, ProductEdit, FirstView, ProfileImg, UserConfirm, MyPage, Chat, ChatRoom,Pop} from "./templates";

const Router = () => {
    return(
        <Switch>
            <Route exact path={"/signup"} component={SignUp} />
            <Route exact path={"/signin"} component={SignIn} />
            <Route exact path={"/reset"} component={Reset} />
            <Route exact path={"/firstview"} component={FirstView} />
            <Route exact path={"/profileimg"} component={ProfileImg} />
            <Route exact path={"/userconfirm"} component={UserConfirm} />


            {/* <Auth> */}
                <Route exact path={"(/)?"} component={Home} />
                <Route exact path={"/mypage"} component={MyPage} />
                <Route exact path={"/chat"} component={Chat} />
                <Route exact path={"/chatroom"} component={ChatRoom} />
                <Route exact path={"/pop"} component={Pop} />


                <Route exact path={"/product/edit"} component={ProductEdit} />
            {/* </Auth> */}

        </Switch>
    );
};

export default Router;