import React from 'react';
import PropTypes from "prop-types";

const ProfileIcon = (props) => {
	const { color } = props;
	
	return (
		<svg height={48} version="1.1" x="0px" y="0px" viewBox="0 0 96 120">
			<path fill={color} d="M48,9C26.5,9,9,26.5,9,48s17.5,39,39,39s39-17.5,39-39S69.5,9,48,9z M29.2,77.5c0.3-10.4,8.9-19.4,18.8-19.4     s18.5,9,18.8,19.4C61.4,81,54.9,83,48,83S34.6,81,29.2,77.5z M39.2,43.2c0-4.8,3.9-8.8,8.8-8.8s8.8,3.9,8.8,8.8S52.8,52,48,52     S39.2,48.1,39.2,43.2z M70.6,74.7c-1.3-9.6-8.3-17.6-17.2-19.9c4.4-2,7.4-6.4,7.4-11.6c0-7-5.7-12.8-12.8-12.8     s-12.8,5.7-12.8,12.8c0,5.1,3,9.5,7.4,11.6c-8.9,2.4-15.9,10.3-17.2,19.9C17.8,68.3,13,58.7,13,48c0-19.3,15.7-35,35-35     s35,15.7,35,35C83,58.7,78.2,68.3,70.6,74.7z"/>
		</svg>
	)
}

ProfileIcon.propTypes = {
	color: PropTypes.string.isRequired,
}

export default ProfileIcon;
