import React from 'react';
import PropTypes from "prop-types";

const PinIcon = (props) => {
	const { color } = props;
	
	return (
		<svg height={48} version="1.1" viewBox="0 0 100 167.5" x="0px" y="0px" fillRule="evenodd" clipRule="evenodd">
			<g>
				<path fill={color} d="M50 0c28,0 50,22 50,48 0,18 -26,57 -42,81 -4,6 -12,6 -16,0 -16,-24 -42,-63 -42,-81 0,-26 22,-48 50,-48zm0 17c17,0 32,14 32,31 0,18 -15,32 -32,32 -17,0 -31,-14 -31,-32 0,-17 14,-31 31,-31z"/>
			</g>
		</svg>
	)
}

PinIcon.propTypes = {
	color: PropTypes.string.isRequired,
}

export default PinIcon;
