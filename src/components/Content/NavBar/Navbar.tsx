import React from "react";
import s from "./navbar.module.scss"
import {ReactComponent as Login} from "./../../../imports/login.svg";
import {ReactComponent as Logout} from "./../../../imports/logout.svg";
import {ReactComponent as Profile} from "./../../../imports/profile.svg";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../store";
import {deleteUserAsync} from "../../../store/contentSlice";


export const Navbar = () => {
    const {
        isAuth
    } = useAppSelector((state) => state.contentReducer);
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const goTo = (name: string) => {
        navigate(`/${name}`)
    }
    const logout = () => {
        dispatch(deleteUserAsync())
    }
    return (
        <div className={s.navbarContainer}>
            <div className={s.block} onClick={() => goTo("contacts")}>
                <div className={s.icon}><Profile/></div>
                <div>Мои контакты</div>
            </div>
            <div className={s.authBlock}>
                {isAuth ?
                    <div className={s.block} onClick={logout}>
                        <div className={s.icon}><Logout/></div>
                        <div>Выйти</div>
                    </div>
                    :
                    <div className={s.block} onClick={() => goTo("login")}>
                        <div className={s.icon}><Login/></div>
                        <div>Войти</div>
                    </div>
                }
            </div>
        </div>
    )
}