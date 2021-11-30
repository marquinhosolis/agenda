import React, { useState, useEffect } from 'react';
import NovoContatoForm from './components/NovoContatoForm/NovoContatoForm';
import Header from './components/Header/Header';
import AgendaVaziaPlaceholder from './components/AgendaVaziaPlaceholder/AgendaVaziaPlaceholder';
import ListaContatos from './components/ListaContatos/ListaContatos';
import DestaqueContato from './components/DestaqueContato/DestaqueContato';
import ModalExclusao from './components/ModalExclusao/ModalExclusao';
function App() {
	const [contatos, setContatos] = useState(() => {
		const saved = localStorage.getItem('contatos');
		const initialValue = JSON.parse(saved);
		return initialValue || [];
	});
	const [showButtonHeader, setShowButtonHeader] = useState(false);
	const [editContato, setEditContato] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [showModalExclusao, setShowModalExclusao] = useState(false);
	const [showDestaque, setShowDestaque] = useState(false);

	const novoContato = (contato) => {
		setContatos([...contatos, contato]);
		showDestaqueFunction(contato);
	};

	function updateContato(contato) {
		const newContatos = contatos.map((c) => {
			if (c.id === contato.id) {
				return contato;
			}
			return c;
		});
		setContatos(newContatos);
		setEditContato('');
		setShowDestaque(false);
	}

	function editContatoFunction(contato) {
		showModalFunction();
		setEditContato(JSON.stringify(contato));
		setShowDestaque(false);
	}

	function removeContato(index) {
		const newContatos = contatos.filter((contato, i) => i !== index);
		setContatos(newContatos);
		showModalExclusaoFunction();
		setShowDestaque(false);
	}

	function showModalFunction() {
		setShowModal(!showModal);
		setEditContato('');
	}

	function showModalExclusaoFunction() {
		setShowModalExclusao(!showModalExclusao);
	}

	function showDestaqueFunction(contato) {
		setShowDestaque(true);
		localStorage.setItem('novoContato', JSON.stringify(contato));
		setTimeout(() => {
			setShowDestaque(false);
		}, 10000);
	}

	useEffect(() => {
		if (contatos.length === 0) {
			setShowButtonHeader(false);
		} else {
			setShowButtonHeader(true);
		}

		localStorage.setItem('contatos', JSON.stringify(contatos));
	}, [contatos]);

	return (
		<div className="agendaWrapper">
			<Header
				showButton={showButtonHeader}
				showModal={showModalFunction}
			/>
			{contatos.length === 0 ? (
				<AgendaVaziaPlaceholder showModal={showModalFunction} />
			) : (
				<ListaContatos
					contatos={contatos}
					editContatoFunction={editContatoFunction}
					removeContato={removeContato}
					showModal={showModalExclusao}
					showModalExclusaoFunction={showModalExclusaoFunction}
				/>
			)}
			{showModal && (
				<NovoContatoForm
					onSubmit={novoContato}
					updateContato={updateContato}
					editContato={editContato}
					showModal={showModalFunction}
				/>
			)}
			{showModalExclusao && (
				<ModalExclusao
					removeContato={removeContato}
					showModalExclusaoFunction={showModalExclusaoFunction}
				/>
			)}
			{showDestaque && (
				<DestaqueContato
					contatos={contatos}
					editContatoFunction={editContatoFunction}
					removeContato={removeContato}
					showModal={showModalExclusao}
					showModalFunction={showModalExclusaoFunction}
				/>
			)}
		</div>
	);
}

export default App;
