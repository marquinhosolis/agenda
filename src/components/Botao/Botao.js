import React from 'react';
import './Botao.scss';

export default function Botao(props) {
	return (
		<button
			className={'botao ' + props.classNames}
			disabled={props.disabled}
		>
			{props.icone && <img src={props.icone} alt="" />}
			<span>{props.label}</span>
		</button>
	);
}
