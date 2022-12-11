import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./store/categoriesSlice";
import "./App.css";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);
	return <div className="App"></div>;
}

export default App;
