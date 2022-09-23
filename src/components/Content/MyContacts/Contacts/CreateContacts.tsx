import React, {FC, useState} from "react";
import s from "./contacts.module.scss"
import {useAppDispatch} from "../../../../store";
import {addContactAsync} from "../../../../store/contentSlice";

type CreateContactsPropsType = {
    setNewContact: (boolean: boolean) => void
}

export const CreateContacts: FC<CreateContactsPropsType> = (props) => {
    const dispatch = useAppDispatch()
    const [name, setName] = useState("")
    const [isMale, setIsMale] = useState(true)
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
    const changeGender = () => {
        setIsMale(!isMale)
    }
    const saveContact = () => {
        const body =
            {
                name,
                email,
                gender: isMale ? "male" : "female",
                phone
            }
        dispatch(addContactAsync(body))
        setName("")
        setPhone("")
        setEmail("")
        props.setNewContact(false)
    }
    return (
        <div className={s.createContainer}>
            <div>
                <div>Имя:</div>
                <input value={name} onChange={changeName}/>
            </div>
            <div>
                <div>Пол:</div>
                <div className={s.checkboxes}>
                    <label>
                        <input type={"checkbox"} onChange={changeGender} checked={isMale}/>
                        Муж.
                    </label>
                    <label>
                        <input type={"checkbox"} onChange={changeGender} checked={!isMale}/>
                        Жен.
                    </label>
                </div>
            </div>
            <div>
                <div>E-mail:</div>
                <input value={email} onChange={changeEmail}/>
            </div>
            <div>
                <div>Телефон:</div>
                <input value={phone} onChange={changePhone}/>
            </div>
            <div style={{display: "flex"}}>
                <div className={s.saveButton} onClick={saveContact}>
                    Сохранить
                </div>
            </div>
        </div>
    )
}