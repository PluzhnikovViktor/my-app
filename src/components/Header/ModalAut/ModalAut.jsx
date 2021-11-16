import React, {useEffect, useState} from "react";

import style from "./ModalAut.module.css";

export const ModalAut = ({active, setActive, user, setOwner}) => {
	useEffect(() => {
		setActive(false);
	}, [])


	const [loginField, setLogin] = useState()
	const [passwordField, setPassword] = useState()

	const onInputChange = (v) => {
		setLogin( v.target.value );
				// setPassword( v.target.value );
    }
	const onInputChange1 = (v) => {
		setPassword( v.target.value );
	}



	const login = () => {
		let users = JSON.parse(localStorage.getItem('users'));
		if (!users){
			alert('юзер не найден'); 
			return;
		} 
		let currentUser = users.find(i => i.email == loginField && i.password == passwordField);
		if (currentUser) {
			localStorage.setItem('token', loginField);
			setOwner(loginField);
		} else {
			alert('юзер не найден')
		}
		setActive(false);
	}

	return(
		<div className={active ? `${style.modal} ${style.active}` : style.modal} onClick={() => setActive(false)}>
			<div className={style.modalContent} onClick={e => e.stopPropagation()}>
				<h3>Log in to your account</h3>
				<label className={style.nameInput}>Email</label>
				<input className={style.input} placeholder="Your Email" name="email"  type="email" onChange={onInputChange} value={loginField} />
				<label className={style.nameInput}>Password</label>
				<input className={style.input} placeholder="Your password" name="password" type="password" onChange={onInputChange1} value={passwordField} />
				<button className={style.buttonRegister} onClick={login}>Register</button>
				{/*<div className={style.ques}>*/}
					<p className={style.uReg}>No account?  <a href="#">Create one</a></p>

				{/*</div>*/}
			</div>
		</div>
	)
}