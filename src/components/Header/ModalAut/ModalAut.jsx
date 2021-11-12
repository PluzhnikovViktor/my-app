import React, {useEffect} from "react";

import style from "./ModalAut.module.css";

export const ModalAut = ({active, setActive}) => {
	useEffect(() => {
		setActive(false);
	}, [])
	return(
		<div className={active ? `${style.modal} ${style.active}` : style.modal} onClick={() => setActive(false)}>
			<div className={style.modalContent} onClick={e => e.stopPropagation()}>
				<h3>Log in to your account</h3>
				<label className={style.nameInput}>Email</label>
				<input className={style.input} placeholder="Your Email"  type="email"/>
				<label className={style.nameInput}>Password</label>
				<input className={style.input} placeholder="Your password"  type="password"/>
				<button className={style.buttonRegister}>Register</button>
				{/*<div className={style.ques}>*/}
					<p className={style.uReg}>No account?  <a href="#">Create one</a></p>

				{/*</div>*/}
			</div>
		</div>
	)
}