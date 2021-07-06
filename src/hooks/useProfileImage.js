const useProfileImage = (data) => {
	const { results } = data;
	if (!results) return null;
	const { picture: { large } } = results[0];
	return large;
}

export default useProfileImage;
