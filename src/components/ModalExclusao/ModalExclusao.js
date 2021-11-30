import React from 'react';
import './ModalExclusao.scss';
import Botao from '../Botao/Botao';

export default function ModalExclusao(props) {
	function removeContato() {
		var indexItem = localStorage.getItem('indexItem');
		props.removeContato(parseInt(indexItem));
	}
	return (
		<div className="modalMask">
			<div className="modalContent modalExclusao">
				<div className="modalHeader">Novo Contato</div>
				<div className="modalBody">
					Deseja realmente excluir o contato?
				</div>
				<div className="modalFooter">
					<span onClick={props.showModalExclusaoFunction}>
						<Botao classNames="botao-cancelar" label="cancelar" />
					</span>
					<span onClick={removeContato}>
						<Botao classNames="botao-laranja" label="Excluir" />
					</span>
				</div>
			</div>
		</div>
	);
}
