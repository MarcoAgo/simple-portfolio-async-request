import data from "../data";
import useField from "../hooks/useField";
import {useState} from "react";
import Icon from "./Icon";
import PropTypes from "prop-types";

const BottomBar = (props) => {
	const { res } = props;
	const [itemHover, setItemHover] = useState(data[0]);
	const currentField = useField(itemHover, res);
	
	const renderItem = (key, index) => (
		<Icon
			key={`${key}-${index}`}
			itemKey={key}
			itemHover={itemHover}
			setItemHover={setItemHover}
		/>
	)
	
	return (
		<>
			<div className="fieldWrapper">
				<p>{currentField?.description}</p>
				<h3>{currentField?.value}</h3>
			</div>
			<div className="bottomWrapper">
				{data.map(renderItem)}
			</div>
		</>
	)
}

BottomBar.propTypes = {
	res: PropTypes.object.isRequired,
}

export default BottomBar;
