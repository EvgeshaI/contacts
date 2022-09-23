import React, {FC, useState} from "react";
import s from "./contacts.module.scss"
import {ReactComponent as Woman} from "./../../../../imports/woman.svg";
import {ReactComponent as Man} from "./../../../../imports/man.svg";
import {ReactComponent as Trash} from "./../../../../imports/trash.svg";
import {ReactComponent as Pencil} from "./../../../../imports/pencil.svg";
import {IContact} from "../../../../types";
import {useAppDispatch} from "../../../../store";
import {removeContactAsync} from "../../../../store/contentSlice";
import {EditContact} from "./EditContact";

type ContactsPropsType = {
    contact: IContact
}
export const Contacts: FC<ContactsPropsType> = (props) => {
    const dispatch = useAppDispatch()
    const [edit, setEdit] = useState(false)
    const deleteContact = () => {
        dispatch(removeContactAsync(props.contact.id!))
    }
    let avatar = props.contact.gender === "male" ? <Man/> : <Woman/>
    return (
        <>
                <div className={s.contactContainer}>
                    <div className={s.createIcons}>
                        <div onClick={() => setEdit(!edit)}><Pencil/></div>
                        <div onClick={deleteContact}><Trash/></div>
                    </div>
                    <div className={s.contactInfo}>
                        <div className={s.avatar}>
                            {avatar}
                        </div>
                        {edit ?
                            <EditContact contact={props.contact} setEdit={setEdit}/>
                            :
                            <div className={s.info}>
                                <div><b>Имя:</b> {props.contact.name}</div>
                                <div><b>Email:</b> {props.contact.email}</div>
                                <div><b>Телефон:</b> {props.contact.phone}</div>
                            </div>
                        }
                    </div>
                </div>
        </>

    )
}