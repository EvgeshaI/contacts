import React, {FC} from "react";
import s from "./contacts.module.scss"
import {ReactComponent as Woman} from "./../../../../imports/woman.svg";
import {ReactComponent as Man} from "./../../../../imports/man.svg";

type ContactsPropsType = {
    name: string,
    gender: string,
    email: string,
    phone: string
}
export const Contacts: FC<ContactsPropsType> = (props) => {
    let avatar = props.gender === "male" ? <Man/> : <Woman/>
    return (
        <>
                <div className={s.contactContainer}>
                    <div className={s.avatar}>
                        {avatar}
                    </div>
                    <div className={s.info}>
                        <div><b>Имя:</b> {props.name}</div>
                        <div><b>Email:</b> {props.email}</div>
                        <div><b>Телефон:</b>{props.phone}</div>
                    </div>
                </div>
        </>

    )
}