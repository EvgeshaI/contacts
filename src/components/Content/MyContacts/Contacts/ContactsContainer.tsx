import React, {useEffect, useState} from "react";
import s from "./contacts.module.scss"
import {ReactComponent as Add} from "./../../../../imports/add.svg";
import {ReactComponent as Search} from "./../../../../imports/search.svg";
import {CreateContacts} from "./CreateContacts";
import {Contacts} from "./Contacts";
import {useAppDispatch, useAppSelector} from "../../../../store";
import {getContactAsync, searchContact} from "../../../../store/contentSlice";

export const ContactsContainer = () => {
    const dispatch = useAppDispatch()
    const {
        isAuth,
        contacts
    } = useAppSelector((state) => state.contentReducer);

    const [newContact, setNewContact] = useState(false)
    const [searchName, setSearchName] = useState("")
    useEffect(() => {
        if (searchName.length === 0){
            dispatch(getContactAsync())
        }
    }, [searchName])
    const changeSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchName(e.target.value)
    }
    const searchNameContact = () => {
        dispatch(searchContact(searchName.trim()))
    }
    return (
        <>
            {isAuth ?
                <>
                <div className={s.header}>Мои контакты </div>
                <div className={s.contactsContainer}>
                    <div className={s.search}>
                        <input placeholder={"поиск..."}
                               value={searchName}
                               onChange={changeSearchName}
                        />
                        <div className={s.searchIcon} onClick={searchNameContact}>
                            <Search/>
                        </div>
                    </div>
                    {contacts.length === 0 ?
                        <div className={s.warning}>нет контактов</div>
                        :
                        <>
                            {contacts.map(el => <Contacts contact={el} key={el.id}/>)}
                        </>
                    }
                    <div className={s.addContact} onClick={() => setNewContact(!newContact)}>
                        <div className={s.icon}><Add/></div>
                        <div>Добавить контакт</div>
                    </div>
                    {newContact && <CreateContacts setNewContact={setNewContact}/>}
                </div>
                </>
                :
                <div style={{textAlign:"center", margin:"20px"}}>Авторизуйтесть, чтобы просматривать и добавлять контакты</div>
            }
        </>
    )
}