import React, {FC, useState} from "react";
import s from "./contacts.module.scss";
import {IContact} from "../../../../types";
import {useAppDispatch} from "../../../../store";
import {updateContactAsync} from "../../../../store/contentSlice";

type EditContactPropsType = {
    contact: IContact,
    setEdit: (boolean: boolean) => void
}
export const EditContact: FC<EditContactPropsType> = (props) => {
    const [newName, setNewName] = useState(props.contact.name)
    const [newEmail, setNewEmail] = useState(props.contact.email)
    const [newPhone, setNewPhone] = useState(props.contact.phone)
    const dispatch = useAppDispatch()
    const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value)
    }
    const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewEmail(e.target.value)
    }
    const updatePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPhone(e.target.value)
    }
    const updateContact = () => {
        dispatch(
            updateContactAsync(
            {
                id: props.contact.id,
                name: newName,
                email: newEmail,
                gender: props.contact.gender,
                phone: newPhone
            })
        )
        props.setEdit(false)
    }
    return (
        <div>
            <div className={s.info}>
                <div className={s.field}><b>Имя:</b> <input value={newName} onChange={updateName}/></div>
                <div className={s.field}><b>Email:</b> <input value={newEmail} onChange={updateEmail}/></div>
                <div className={s.field}><b>Телефон:</b> <input value={newPhone} onChange={updatePhone}/></div>
            </div>
            <div className={s.saveButton} onClick={updateContact}>Сохранить</div>
        </div>
    )
}