import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./store/categoriesSlice";
import { fetchAreas } from "./store/areasSlice";
import "./App.css";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAreas());
	}, [dispatch]);
	return <div className="App"></div>;
}

export default App;
