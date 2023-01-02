import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage";
import SingleCategory from "./pages/SingleCategory";
import MealsPage from "./pages/MealsPage";
import SingleMeal from "./pages/SingleMeal";
import Layout from "./pages/Layout";
import AreasPage from "./pages/AreasPage";
import SingleArea from "./pages/SingleArea";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="categories" element={<CategoriesPage />}>
				<Route path=":categoryName" element={<SingleCategory />} />
			</Route>
			<Route path="/meals" element={<MealsPage />}>
				<Route path="/meals/:mealId" element={<SingleMeal />} />
			</Route>
			<Route path="/areas" element={<AreasPage />}>
				<Route path="/areas/:areaName" element={<SingleArea />} />
			</Route>
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}>
			</RouterProvider>
		</Provider>
	</React.StrictMode>
);
