import React, {useState} from "react";
import s from "./contacts.module.scss"
import {ReactComponent as Add} from "./../../../../imports/add.svg";
import {CreateContacts} from "./CreateContacts";
import {Contacts} from "./Contacts";
import {useAppSelector} from "../../../../store";

export const ContactsContainer = () => {
    const {
        contacts
    } = useAppSelector((state) => state.contentReducer);
    const [newContact, setNewContact] = useState(false)
    return (
        <>
            <div className={s.header}>Мои контакты</div>
            <div className={s.contactsContainer}>
                {contacts.length === 0 ?
                    <div className={s.warning}>У вас пока нет контактов</div>
                    :
                    <>
                        {contacts.map(el => <Contacts name={el.name} gender={el.gender} email={el.email} phone={el.phone}/>)}
                    </>

                }
                <div className={s.addContact} onClick={() => setNewContact(!newContact)}>
                    <div className={s.icon}><Add/></div>
                    <div>Добавить контакт</div>
                </div>
                {newContact && <CreateContacts setNewContact={setNewContact}/> }
            </div>
        </>
    )
}