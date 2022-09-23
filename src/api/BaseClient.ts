import axios, {AxiosRequestConfig} from "axios";

export class BaseClient {
    static baseUrl = "http://127.0.0.1:3001"
    static async get<T>(url: string, options?: AxiosRequestConfig) {
        const response = await axios.get<T>(`${this.baseUrl}/${url}`, options)
        return response.data
    }
    static async post<T> (url: string, data: any, options?: AxiosRequestConfig) {
        const response = await axios.post<T>(`${this.baseUrl}/${url}`, data, options)
        return response.data;
    }
    static async put<T> (url: string, data: any, options?: AxiosRequestConfig) {
        const response = await axios.put<T>(`${this.baseUrl}/${url}`, data, options)
        return response.data;
    }
    static async delete<T> (url: string, options?: AxiosRequestConfig) {
        const response = await axios.delete<T>(`${this.baseUrl}/${url}`, options)
        return response.data;
    }
}