import { useState } from "react";
import listData from "./sidebardata.js";
import SidebarListItem from "./SidebarListItem.js";
import styled from "styled-components";

const SidebarList = () => {
	const [selected, setSelected] = useState("home");
	return (
		<StyledSidebarList>
			<ul>
				{listData.map((item) => {
					return (
						<SidebarListItem
							key={item.id}
							{...item}
							selected={selected}
							setSelected={setSelected}
						/>
					);
				})}
			</ul>
		</StyledSidebarList>
	);
};

const StyledSidebarList = styled.div`
	padding: 50px 20px;

	ul {
		list-style: none;
	}
`;

export default SidebarList;
