import React from 'react';
import PropTypes from "prop-types";

const MailIcon = (props) => {
	const { color } = props;
	
	return (
		<svg height={48} width={48} version="1.1" x="0px" y="0px" viewBox="0 0 100 125">
			<g transform="translate(0,-952.36218)">
				<path fill={color} d="M 10.6875 20 C 8.1322555 20 6 22.10101 6 24.65625 L 6 75.3125 C 6 77.8677 8.1322555 80 10.6875 80 L 89.3125 80 C 91.867744 80 94 77.8677 94 75.3125 L 94 24.65625 C 94 22.10101 91.867744 20 89.3125 20 L 10.6875 20 z M 13.65625 24 L 86.34375 24 L 50 52.34375 L 13.65625 24 z M 10 26.1875 L 38.28125 48.25 L 10 73.40625 L 10 26.1875 z M 90 26.1875 L 90 73.40625 L 61.71875 48.25 L 90 26.1875 z M 41.5 50.75 L 48.78125 56.4375 A 2.0001999 2.0001999 0 0 0 51.21875 56.4375 L 58.5 50.75 L 86.90625 76 L 13.09375 76 L 41.5 50.75 z " transform="translate(0,952.36218)"/>
			</g>
		</svg>
	)
}

MailIcon.propTypes = {
	color: PropTypes.string.isRequired,
}

export default MailIcon;
