import React from "react";
import PropTypes from 'prop-types';
import useProfileImage from "../hooks/useProfileImage";

const UpperBar = (props) => {
	const { res } = props;
	const image = useProfileImage(res);
	
	return (
		<div className="upperWrapper">
			<div className="profileImage">
				<div className="outline" />
				{image
					? (<img alt="User profile image" src={image} />)
					: <div className="imageLoader" />
				}
			</div>
			<div className="divider"></div>
		</div>
	)
}

UpperBar.propTypes = {
	res: PropTypes.object.isRequired,
}

export default UpperBar;
