import moment from "moment";

const useField = (key, params) => {
	const { results } = params;
	const data = results?.[0];
	
	console.log(data);
	console.log('key', key);
	if (!data?.[key]) return { description: '', value: '' };
	console.log('data[key]', data[key]);
	
	switch (key) {
		case 'name': {
			const { first, last } = data[key] || {};
			return {
				description: 'Hello, my name is',
				value: `${first} ${last}`
			};
		}
		case 'location': {
			const { location } = data;
			const { city } = location;
			const { street: { number, name } } = location;
			return {
				description: 'My address is',
				value: `${number} ${name}, ${city}`,
			}
 		}
		case 'phone': {
			const { cell: value } = data;
			return {
				description: 'My phone number is',
				value,
			}
		}
		case 'email': {
			const value = data[key];
			return {
				description: 'My email address is',
				value,
			}
		}
		case 'login': {
			const { login: { password: value } } = data;
			return {
				description: 'My password is',
				value,
			}
		}
		case 'dob': {
			const { dob: { date } } = data || {};
			const value = moment(date).format('D/M/YYYY');
			return {
				description: 'My birthday is',
				value,
			}
		}
		default:
			return {
				description: '',
				value: '',
			}
	}
}

export default useField;
