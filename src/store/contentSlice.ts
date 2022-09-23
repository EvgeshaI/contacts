import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IContact} from "../types";
import {AppThunk} from "./index";
import {ContactClient} from "../api/ContactClient";

interface ContentState {
    isAuth: boolean
    contacts: Array<IContact>
}

const initialState: ContentState = {
    isAuth: false,
    contacts: []
};

export const contentSlice = createSlice(
    {
        name: 'content',
        initialState,
        reducers: {
            setAuth: (state, action: PayloadAction<boolean>) => {
                state.isAuth = action.payload
            },
            getMyContacts: (state, action: PayloadAction<Array<IContact>>) => {
                state.contacts = action.payload
            },
            addContact: (state, action: PayloadAction<IContact>) => {
                const newContact = action.payload
                state.contacts = [...state.contacts, newContact]
            },
            deleteContact: (state, action: PayloadAction<number>) => {
                let id = action.payload
                state.contacts = state.contacts.filter(el => el.id !== id)
            },
            updateContact: (state, action: PayloadAction<IContact>) => {
                let id = action.payload.id
                state.contacts = state.contacts.map(el => {
                    if(el.id === id){
                        return action.payload
                    }
                    return el
                })
            },
            searchContact: (state, action: PayloadAction<string>) => {
                let search = action.payload
                state.contacts = state.contacts.filter(el =>
                    (el.name.toLowerCase() === search.toLowerCase()
                        || el.email.toLowerCase() === search.toLowerCase()
                        || el.phone === search)
                )
            }
        }
    }
)

export const {
    setAuth,
    getMyContacts,
    addContact,
    deleteContact,
    updateContact,
    searchContact
} = contentSlice.actions

const token = localStorage.getItem("token")

export const initializedAppAsync = (): AppThunk => (dispatch: any) => {
    const token = localStorage.getItem("token")
    if(token) {
        dispatch(setAuth(true))
    }
}
export const authUserAsync = ( email: string, password: string): AppThunk => async  (dispatch: any) => {
    let response = await ContactClient.auth(email, password)
    localStorage.setItem("token", response.token)
    dispatch(setAuth(true))
}
export const deleteUserAsync = (): AppThunk => async  (dispatch: any) => {
    localStorage.removeItem("token")
    dispatch(setAuth(false))
}
export const getContactAsync = (): AppThunk => async  (dispatch: any) => {
    let result = await ContactClient.getContacts(token!)
    dispatch(getMyContacts(result))
}
export const addContactAsync = (contact: IContact): AppThunk => async  (dispatch: any) => {
  let result = await ContactClient.addContact(contact, token!)
    dispatch(addContact(result))
}
export const removeContactAsync = (id: number): AppThunk => async  (dispatch: any) => {
    await ContactClient.deleteContacts(id, token!)
    dispatch(deleteContact(id))
}
export const updateContactAsync = (contact: IContact): AppThunk => async  (dispatch: any) => {
    let result = await ContactClient.updateContacts(contact, token!)
    dispatch(updateContact(result))
}

export default contentSlice.reducer;