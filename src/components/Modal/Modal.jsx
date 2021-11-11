import React from "react";
import style from "./Modal.module.css";

export const Modal = ({active, setActive}) => {
	return(
		<div className={style.modal}>
			<div className={style.modalContent}>
				<h3>Create an account</h3>
				<label className={style.nameInput}>Name</label>
				<input className={style.input} placeholder="Your name" type="text"/>
				<label className={style.nameInput}>Email</label>
				<input className={style.input} placeholder="Your Email"  type="email"/>
				<label className={style.nameInput}>Password</label>
				<input className={style.input} placeholder="Your password"  type="password"/>
				<button className={style.buttonRegister}>Register</button>
				<a href="#"></a>
			</div>
		</div>
	)
}