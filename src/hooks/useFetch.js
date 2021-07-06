import { useEffect, useState } from "react";

/**
 * Fetch over api
 * @param path, {String}, path passed as url request
 * @param method, {String}, method of API request
 * @returns {[{}, unknown, boolean]}
 */
const useFetch = (path, method = 'GET') => {
	const [error, setError] = useState(null);
	const [res, setRes] = useState({});
	const [isFetching, setIsFetching] = useState(true);
	
	useEffect( () => {
		const headers = {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE',
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
		};
		
		const fetchData = async () => {
			await fetch(path, { headers, method })
				.then(res => res.json())
				.then(
					// success, save result
					(res) => {
						setIsFetching(false);
						setRes(res);
						return res;
					},
					// error, set error
					(error) => {
						setIsFetching(false);
						setError(error);
						return error;
					})
		}
		fetchData();
	}, [])
	
	return [res, error, isFetching];
}

export default useFetch;
