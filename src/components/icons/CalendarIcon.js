import PropTypes from "prop-types";

const CalendarIcon = (props) => {
	const { color } = props;
	
	return (
		<svg width={48} height={48} viewBox="0 0 24 30" version="1.1" x="0px" y="0px">
			<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<rect fill={color} fillRule="nonzero" x="0" y="0" />
				<path
					d="M18,6 L17,6 L16,6 L15,6 L9,6 L8,6 L7,6 L6,6 L4.5,6 C4.22385763,6 4,6.22385763 4,6.5 L4,9 L20,9 L20,6.5 C20,6.22385763 19.7761424,6 19.5,6 L18,6 Z M18,5 L19.5,5 C20.3284271,5 21,5.67157288 21,6.5 L21,20.5 C21,21.3284271 20.3284271,22 19.5,22 L4.5,22 C3.67157288,22 3,21.3284271 3,20.5 L3,6.5 C3,5.67157288 3.67157288,5 4.5,5 L6,5 L6,2 L9,2 L9,5 L15,5 L15,2 L18,2 L18,5 Z M17,5 L17,3 L16,3 L16,5 L17,5 Z M7,5 L8,5 L8,3 L7,3 L7,5 Z M4,10 L4,20.5 C4,20.7761424 4.22385763,21 4.5,21 L19.5,21 C19.7761424,21 20,20.7761424 20,20.5 L20,10 L4,10 Z"
				  fill={color}
					fillRule="nonzero"
				/>
			</g>
		</svg>
	)
}

CalendarIcon.propTypes = {
	color: PropTypes.string.isRequired,
}

export default CalendarIcon;
