import React from 'react';

const Contact = ({name, email, phone, website}) => {
	return (
		<table>
			<tr>
				<td>Name</td>
				<td>{name}</td>
			</tr>
			<tr>
				<td>Email</td>
				<td>{email}</td>
			</tr>
			<tr>
				<td>Phone</td>
				<td>{phone}</td>
			</tr>
			<tr>
				<td>Website</td>
				<td>{website}</td>
			</tr>
		</table>
	);
};


export default Contact