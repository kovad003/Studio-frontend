import React from 'react'
import styled from "styled-components";

const StatusEdit = ({ tmpProject, setTmpProject }) => {
	const onChangeHandler = (e) => {
		const project = {
			...tmpProject, isActive: (e.target.value?.toLowerCase?.() === 'true')
		}
		setTmpProject(project)
	}

	return (
		<StyledStatusEdit>
			<select id="status" value={tmpProject.isActive} onChange={onChangeHandler} >
				<option value="true">on-going</option>
				<option value="false">done</option>
			</select>
		</StyledStatusEdit>
	)
}

const StyledStatusEdit = styled.section`
`;

export default StatusEdit
