import React, {useState} from 'react';
import PhoneIcon from "./icons/PhoneIcon";
import CalendarIcon from "./icons/CalendarIcon";
import MailIcon from "./icons/MailIcon";
import ProfileIcon from "./icons/ProfileIcon";
import LockIcon from "./icons/LockIcon";
import PinIcon from "./icons/PinIcon";
import PropTypes from "prop-types";

const Icon = (props) => {
	const { itemKey, itemHover, setItemHover } = props;
	
	const renderIcon = () => {
		switch (itemKey) {
			case 'phone':
				return <PhoneIcon color={itemHover === itemKey ? "green" : "grey"} />
			case 'dob':
				return <CalendarIcon color={itemHover === itemKey ? "green" : "grey"} />
			case 'email':
				return <MailIcon color={itemHover === itemKey ? "green" : "grey"} />
			case 'name':
				return <ProfileIcon color={itemHover === itemKey ? "green" : "grey"} />
			case 'login':
				return <LockIcon color={itemHover === itemKey ? "green" : "grey"} />
			case 'location':
				return <PinIcon color={itemHover === itemKey ? "green" : "grey"} />
			default:
				return null;
		}
	}
	
	return (
		<div
			onMouseOver={() => setItemHover(itemKey)}
			onMouseOut={() => setItemHover(prevState => prevState)}
			className="item"
		>
			{renderIcon()}
		</div>
	)
}

Icon.propTypes = {
	itemKey: PropTypes.string,
	itemHover: PropTypes.bool,
	setItem: PropTypes.func,
}

Icon.defaultProps = {
	itemKey: undefined,
	itemHover: undefined,
	setItem: () => {},
}

export default Icon;
