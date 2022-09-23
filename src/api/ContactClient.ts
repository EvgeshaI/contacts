import {BaseClient} from "./BaseClient";
import {IAuthResponse, IContact} from "../types";
import {AxiosRequestConfig} from "axios";

export class ContactClient extends BaseClient {
    static async auth (email: string, password: string) {
        let body = {
            email: email,
            password: password
        }
        return this.post<IAuthResponse>(`login`, body)
    }
    static async addContact(contact: IContact, token: string) {
        return this.post<IContact>(`contacts`, contact, this.tokenHeader(token))
    }
    static async getContacts (token: string) {
        return this.get<Array<IContact>>(`contacts`, this.tokenHeader(token))
    }
    static async deleteContacts (id: number, token: string) {
        return this.delete(`contacts/${id}`, this.tokenHeader(token))
    }
    static async updateContacts (contact: IContact, token: string) {
        return this.put<IContact>(`contacts/${contact.id}`, contact, this.tokenHeader(token))
    }

    static tokenHeader(token: string): AxiosRequestConfig {
        return {
            headers: {
                authorization: "Bearer " + token
            }
        }
    }
}