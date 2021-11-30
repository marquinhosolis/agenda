import React, { useEffect, useState } from 'react';
import Botao from '../Botao/Botao';
import './NovoContatoForm.scss';

export default function NovoContatoForm(props) {
	const [nameValue, setNameValue] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [telValue, setTelValue] = useState('');
	const [buttonDisabled, setButtonDisabled] = useState(true);

	function handleNameChange(event) {
		var nameInputValue = document.getElementById('nameInput').value;
		setNameValue(nameInputValue);

		var emailInputValue = document.getElementById('emailInput').value;
		setEmailValue(emailInputValue);

		var telInputValue = document.getElementById('telInput').value;
		setTelValue(telInputValue);
	}

	function formSubmit(event) {
		event.preventDefault();

		if (props.editContato) {
			const novoContato = {
				id: JSON.parse(props.editContato).id,
				name: nameValue,
				email: emailValue,
				tel: telValue,
			};
			props.updateContato(novoContato);
		} else {
			const novoContato = {
				id: Math.floor(Math.random() * 10000),
				name: nameValue,
				email: emailValue,
				tel: telValue,
			};
			props.onSubmit(novoContato);
		}

		clearForm();
	}

	function clearForm() {
		setNameValue('');
		setEmailValue('');
		setTelValue('');
		props.showModal();
	}

	useEffect(() => {
		if (props.editContato) {
			setNameValue(JSON.parse(props.editContato).name);
			setEmailValue(JSON.parse(props.editContato).email);
			setTelValue(JSON.parse(props.editContato).tel);
		}
	}, [props.editContato]);

	useEffect(() => {
		if (nameValue !== '' || emailValue !== '' || telValue !== '') {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [nameValue, emailValue, telValue]);

	return (
		<div className="modalMask">
			<div className="modalContent">
				<div className="modalHeader">Novo Contato</div>
				<form onSubmit={formSubmit} className="modalForm">
					<div className="modalBody">
						<input type="hidden" value={props.editContato} />
						<label htmlFor="nome">Nome</label>
						<input
							type="text"
							name="nome"
							value={nameValue}
							id="nameInput"
							onChange={handleNameChange}
						/>
						<label htmlFor="email">E-mail</label>
						<input
							type="email"
							name="email"
							value={emailValue}
							id="emailInput"
							onChange={handleNameChange}
						/>
						<label htmlFor="telefone">Telefone</label>
						<input
							type="tel"
							name="telefone"
							value={telValue}
							id="telInput"
							onChange={handleNameChange}
						/>
					</div>
					<div className="modalFooter">
						<span onClick={clearForm}>
							<Botao
								classNames="botao-cancelar"
								label="Cancelar"
							/>
						</span>
						<span disabled={buttonDisabled}>
							<Botao
								classNames="botao-laranja"
								label="Salvar"
								disabled={buttonDisabled}
							/>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
}
