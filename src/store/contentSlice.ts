import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IContact} from "../types";

interface ContentState {
    contacts: Array<IContact>
}


const initialState: ContentState = {
    contacts: []
};

export const contentSlice = createSlice(
    {
        name: 'content',
        initialState,
        reducers: {
            addContact: (state, action: PayloadAction<IContact>) => {
                const newContact = action.payload
                state.contacts = [...state.contacts, newContact]
            }

        }
    }
)

export const {
    addContact
} = contentSlice.actions


export default contentSlice.reducer;