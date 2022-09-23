import React, {useEffect} from "react";
import s from "./login.module.scss"
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../store";
import {authUserAsync} from "../../../store/contentSlice";
import {ReactComponent as Ok} from "./../../../imports/ok.svg";
import {useNavigate} from "react-router-dom";

type FormValues = {
    username: string;
    email: string;
    password: string;
};

export const Login = () => {
    const {
        isAuth,
    } = useAppSelector((state) => state.contentReducer);
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>({
        mode: "onChange"
    });
    useEffect(() => {
        if(isAuth){
            navigate("/contacts")
        }
    }, [isAuth])
    let onSubmit = handleSubmit((data) => {
        dispatch(authUserAsync(data.email, data.password))
    });
    return (
        <>
            {!isAuth ?
                <>
                    <div className={s.header}>Авторизоваться</div>
                    <div className={s.registrationContainer}>
                        <form onSubmit={onSubmit}>
                            <div className={errors.email ? s.formError : s.form}>
                                <input  {...register("email", {required: true})}
                                        aria-invalid={errors.email ? "true" : "false"}
                                        placeholder="Email"/>
                                {errors.email && errors.email.type === "required" && (
                                    <div className={s.errorMessage}>поле обязательно для заполнения</div>
                                )}
                            </div>
                            <div className={errors.password ? s.formError : s.form}>
                                <input  {...register("password", {required: true})}
                                        type={"password"}
                                        aria-invalid={errors.password ? "true" : "false"}
                                        placeholder="Пароль"
                                />
                                {errors.password && errors.password.type === "required" && (
                                    <div className={s.errorMessage}>поле обязательно для заполнения</div>
                                )}
                            </div>
                            <div className={s.formButtonBox}>
                                <button type="submit" className={s.formButton}>
                                    Вход
                                </button>
                            </div>
                        </form>
                    </div>
                </>
                :
                <div style={{width: "8%", margin: "50px auto"}}><Ok/></div>
            }
        </>
    )
}