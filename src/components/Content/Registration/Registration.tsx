import React from "react";
import s from "./registration.module.scss"
import {useForm} from "react-hook-form";


type FormValues = {
    username: string;
    email: string;
    password: string;
};


export const Registration = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>({
        mode: "onChange"
    });

    let onSubmit = handleSubmit(() => {

    });
    return (
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
    )
}