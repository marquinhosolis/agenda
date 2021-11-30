import React, { useState, useEffect } from 'react';
import DeleteIcon from '../../images/icones/ic-delete.svg';
import EditIcon from '../../images/icones/ic-edit.svg';

import './ListaContatos.scss';

export default function ListaContatos(props) {
	const [contatoCresc, setContatoCresc] = useState(props.contatos);

	function orderContatos(contatos) {
		contatos.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
		setContatoCresc(contatos);
	}

	function deleteItem(item) {
		localStorage.setItem('indexItem', JSON.stringify(item));
		props.showModalExclusaoFunction();
	}

	useEffect(() => {
		orderContatos(props.contatos);
	}, [props.contatos]);

	return (
		<div className="container">
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Contatos</th>
						<th>E-mail</th>
						<th>Telefone</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{contatoCresc.map((contato, index) => {
						return (
							<tr key={contato.id}>
								<td className="avatarCell">
									<div className="avatar">
										{contato.name.charAt(0)}
									</div>
								</td>
								<td>{contato.name}</td>
								<td>{contato.email}</td>
								<td>{contato.tel}</td>
								<td className="iconsCell">
									<span onClick={() => deleteItem(index)}>
										<img src={DeleteIcon} alt="Delete" />
									</span>
									<span
										onClick={() =>
											props.editContatoFunction(contato)
										}
									>
										<img src={EditIcon} alt="Edit" />
									</span>
								</td>

								{/* {props.showModal && (
									<ModalExclusao
										removeContato={() =>
											props.removeContato(index)
										}
										showModalFunction={
											props.showModalFunction
										}
									/>
								)} */}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
