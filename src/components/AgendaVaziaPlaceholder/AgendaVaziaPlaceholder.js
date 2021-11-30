import React from 'react';
import IconeBook from './../../images/icones/ic-book.svg';
import IconePlus from './../../images/icones/ic-plus.svg';
import Botao from './../Botao/Botao';

import './AgendaVaziaPlaceholder.scss';

export default function AgendaVaziaPlaceholder(props) {
	return (
		<div className="AgendaVaziaPlaceholder">
			<img src={IconeBook} alt="Book icone" />
			<p>Nenhum contato foi criado ainda.</p>
			<span onClick={props.showModal}>
				<Botao icone={IconePlus} label="Criar contato" />
			</span>
		</div>
	);
}
