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
import IngredientsPage from "./pages/IngredientsPage";
import SingleIngredient from "./pages/SingleIngredient";
import CategoriesPage from "./pages/CategoriesPage";
import SingleCategory from "./pages/SingleCategory";
import MealsPage from "./pages/MealsPage";
import SingleMeal from "./pages/SingleMeal";
import Layout from "./pages/Layout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="/" element={<Home />} />
			<Route path="/ingredients" element={<IngredientsPage />}>
				<Route path="/ingredients/:ingredientId" element={<SingleIngredient />} />
			</Route>
			<Route path="/categories" element={<CategoriesPage />}>
				<Route path="/categories/:categoryId" element={<SingleCategory />} />
			</Route>
			<Route path="/meals" element={<MealsPage />}>
				<Route path="/meals/:mealId" element={<SingleMeal />} />
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
