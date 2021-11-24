import React, {useEffect, useState} from "react";

import style from "./Modal.module.css";


export const Modal = ({active, setActive}) => {
	useEffect(() => {
		setActive(false);
	}, [])

	const [user, setUser] = useState({
		name: '',
		password: '',
		email: '',
	});




	const onInputChange = (v) => {
        setUser({ ...user, [v.target.name]: v.target.value });
    }

	const register = () => {
		let users = JSON.parse(localStorage.getItem('users'));
		if (users) {
			localStorage.setItem('users', JSON.stringify([...users, user]));
			alert('Пользователь добавлен');
		} else {
			localStorage.setItem('users', JSON.stringify([user]));
			alert('Пользователь добавлен');
		}
		setActive(false);
	}

	return(
		<div id={"modal"} className={active ? `${style.modal} ${style.active}` : style.modal} onClick={() => setActive(false)}>
			<form onSubmit={register} className={style.modalContent} onClick={e => e.stopPropagation()}>
				<h3>Create an account</h3>
				<label className={style.nameInput}>Name</label>
				<input required id="f" pattern={"^[a-z,A-Z]$"} className={style.input} placeholder="Your name" name="name" type="text" onChange={onInputChange} />
				<label className={style.nameInput} >Email</label>
				<input required className={style.input} placeholder="Your Email" name='email'  type="email" onChange={onInputChange} />
				<label className={style.nameInput}>Password</label>
				<input required pattern={"^[a-z,A-Z]{1,10}$"} className={style.input} placeholder="Your password" name="password"  type="password" onChange={onInputChange} />
				<button className={style.buttonRegister}>Register</button>
				<p className={style.uReg}>Do you already have an account?</p>
				<a href="#">Sing in</a>
			</form>
		</div>
	)
}

// className={style.active ? `${style.modal} ${style.active}` : style.modal}