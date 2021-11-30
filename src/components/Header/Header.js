import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Botao from '../Botao/Botao';
import Logo from './../../images/logo.svg';
import IconePlus from './../../images/icones/ic-plus.svg';

import './Header.scss';

export default function Header(props) {
	return (
		<header>
			<div className="container">
				<div className="logoHeader">
					<img src={Logo} alt="Ubook logo" />
				</div>
				{props.showButton && (
					<div className="headerButton">
						<span onClick={props.showModal}>
							<Botao icone={IconePlus} label="Criar contato" />
						</span>
					</div>
				)}

				<div className="headerSearchBox">
					<SearchBox />
				</div>
			</div>
		</header>
	);
}
