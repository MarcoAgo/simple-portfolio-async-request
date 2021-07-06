import './App.css';
import useFetch from "./hooks/useFetch";
import { GET_USER_URL } from "./api/constants";
import UpperBar from "./components/UpperBar";
import BottomBar from "./components/BottomBar";

const App = () => {
	const [res, error, isFetching] = useFetch(GET_USER_URL);
	
	const renderError = () => {
		if (error) {
			return (
				<div className="error">
					Sorry, an error occurred during request, reload and try again.
				</div>
			)
		}
	}
	
	const renderFetching = () => {
		if (isFetching) {
			return (
				<div className="loading">Loading...</div>
			)
		}
	}
	
  return (
	  <div className="pageContainer">
		  <div className="mainWrapper">
			  {renderFetching()}
			  {renderError()}
			  {!isFetching && !error && (
			  	<>
					  <UpperBar res={res} />
					  <BottomBar res={res} />
				  </>
			  )}
		  </div>
	  </div>
  );
}

export default App;
