import React, {useEffect, useState} from "react";

import style from "./ModalAut.module.css";

export const ModalAut = ({active, setActive}) => {
	useEffect(() => {
		setActive(false);
	}, [])

	const [user, setUser] = useState({
		password: '',
		email: '',
	});
	const onInputChange = (v) => {
        setUser({ ...user, [v.target.name]: v.target.value });
    }

	const login = () => {
		let users = JSON.parse(localStorage.getItem('users'));
		if (!users){
			alert('юзер не найден'); 
			return;
		} 
		let currentUser = users.find(i => i.email == user.email && i.password == user.password);
		if (currentUser) {
			alert('залогин')
		} else {
			alert('юзер не найден')
		}
	}

	return(
		<div className={active ? `${style.modal} ${style.active}` : style.modal} onClick={() => setActive(false)}>
			<div className={style.modalContent} onClick={e => e.stopPropagation()}>
				<h3>Log in to your account</h3>
				<label className={style.nameInput}>Email</label>
				<input className={style.input} placeholder="Your Email" name="email"  type="email" onChange={onInputChange} value={user.email} />
				<label className={style.nameInput}>Password</label>
				<input className={style.input} placeholder="Your password" name="password" type="password" onChange={onInputChange} value={user.password} />
				<button className={style.buttonRegister} onClick={login}>Register</button>
				{/*<div className={style.ques}>*/}
					<p className={style.uReg}>No account?  <a href="#">Create one</a></p>

				{/*</div>*/}
			</div>
		</div>
	)
}