import React, {useEffect} from "react";

import style from "./Modal.module.css";


export const Modal = ({active, setActive}) => {
	useEffect(() => {
		setActive(false);
	}, [])
	


	return(
		<div className={active ? `${style.modal} ${style.active}` : style.modal} onClick={() => setActive(false)}>
			<div className={style.modalContent} onClick={e => e.stopPropagation()}>
				<h3>Create an account</h3>
				<label className={style.nameInput}>Name</label>
				<input id="f" className={style.input} placeholder="Your name" type="text"/>
				<label className={style.nameInput}>Email</label>
				<input className={style.input} placeholder="Your Email"  type="email"/>
				<label className={style.nameInput}>Password</label>
				<input className={style.input} placeholder="Your password"  type="password"/>
				<button className={style.buttonRegister}>Register</button>
				<p className={style.uReg}>Do you already have an account?</p>
				<a href="#">Sing in </a>
			</div>
		</div>
	)
}

// className={style.active ? `${style.modal} ${style.active}` : style.modal}