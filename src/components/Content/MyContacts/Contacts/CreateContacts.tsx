import React, {FC, useState} from "react";
import s from "./contacts.module.scss"
import {useAppDispatch} from "../../../../store";
import {addContact} from "../../../../store/contentSlice";

type CreateContactsPropsType = {
    setNewContact: (boolean: boolean) => void
}

export const CreateContacts: FC<CreateContactsPropsType> = (props) => {
    const dispatch = useAppDispatch()
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const changePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value)
    }
    const changeMaleGender = () => {
        setGender("male")
    }
    const changeFemaleGender = () => {
        setGender("female")
    }
    const saveContact = () => {
        dispatch(addContact({name, gender, email, phone}))
        setName("")
        setPhone("")
        setEmail("")
        props.setNewContact(false)
    }
    return (
        <div className={s.createContainer}>
            <div>
                <div>Имя:</div>
                <input value={name} onChange={changeName}></input>
            </div>
            <div>
                <div>Пол:</div>
                <div className={s.checkboxes}>
                    <label>
                        <input type={"checkbox"} value={gender} onChange={changeMaleGender}></input>
                        Муж.
                    </label>
                    <label>
                        <input type={"checkbox"} value={gender} onChange={changeFemaleGender}></input>
                        Жен.
                    </label>
                </div>
            </div>
            <div>
                <div>E-mail:</div>
                <input value={email} onChange={changeEmail}></input>
            </div>
            <div>
                <div>Телефон:</div>
                <input value={phone} onChange={changePhone}></input>
            </div>
            <div style={{display: "flex"}}>
                <div className={s.saveButton} onClick={saveContact}>
                    Сохранить
                </div>
            </div>
        </div>
    )
}