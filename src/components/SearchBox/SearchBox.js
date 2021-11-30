import React from 'react';
import './SearchBox.scss';
import SearchIcon from './../../images/icones/ic-search.svg';

export default function SearchBox() {
	return (
		<div className="searchBox">
			<input type="search" placeholder="Buscar..." />
			<button type="submit">
				<img src={SearchIcon} alt="Buscar" />
			</button>
		</div>
	);
}
