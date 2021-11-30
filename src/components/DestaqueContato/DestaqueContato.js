import React from 'react';

import './DestaqueContato.scss';

export default function DestaqueContato() {
	const novoContato = JSON.parse(localStorage.getItem('novoContato'));

	if (localStorage.getItem('novoContato'))
		return (
			<div className="destaqueContatoWrapper">
				<div className="container">
					<table>
						<tbody>
							<tr key={novoContato.id}>
								<td className="avatarCell">
									<div className="avatar">
										{novoContato.name.charAt(0)}
									</div>
								</td>
								<td>{novoContato.name}</td>
								<td>{novoContato.email}</td>
								<td>{novoContato.tel}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
}
