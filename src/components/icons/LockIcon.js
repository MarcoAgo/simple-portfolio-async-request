import React from 'react';
import PropTypes from "prop-types";

const LockIcon = (props) => {
	const { color } = props;
	
	return (
		<svg height={48} version="1.1" x="0px" y="0px" viewBox="0 0 24 30" enable-background="new 0 0 24 24" >
			<path fill={color} fillRule="evenodd" clipRule="evenodd" d="M4.543,9.518h0.72V6.943c0-3.172,3.047-5.743,6.807-5.743  c3.759,0,6.807,2.571,6.807,5.743V8.23v1.287l0,0h0.58c0.635,0,1.153,0.52,1.153,1.154v10.975c0,0.634-0.519,1.153-1.153,1.153  H4.543c-0.635,0-1.154-0.52-1.154-1.153V10.671C3.389,10.037,3.908,9.518,4.543,9.518L4.543,9.518z M16.644,9.518V8.23V6.943  c0-1.879-2.048-3.403-4.573-3.403c-2.526,0-4.574,1.524-4.574,3.403v2.575H16.644L16.644,9.518z"/>
		</svg>
	)
}

LockIcon.propTypes = {
	color: PropTypes.string.isRequired,
}

export default LockIcon;
