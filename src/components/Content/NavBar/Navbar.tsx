import React from "react";
import s from "./navbar.module.scss"
import {ReactComponent as Login} from "./../../../imports/login.svg";
import {ReactComponent as Logout} from "./../../../imports/logout.svg";
import {ReactComponent as Profile} from "./../../../imports/profile.svg";
import {useNavigate} from "react-router-dom";


export const Navbar = () => {
    const navigate = useNavigate()
    const goTo = (name: string) => {
        navigate(`/${name}`)
    }
    return (
        <div className={s.navbarContainer}>
            <div className={s.block} onClick={() => goTo("contacts")}>
                <div className={s.icon}><Profile/></div>
                <div>Мои контакты</div>
            </div>
            <div className={s.authBlock}>
                <div className={s.block} onClick={() => goTo("registration")}>
                    <div className={s.icon}><Login/></div>
                    <div>Войти</div>
                </div>
                <div className={s.block}>
                    <div className={s.icon}><Logout/></div>
                    <div>Выйти</div>
                </div>
            </div>
        </div>
    )
}