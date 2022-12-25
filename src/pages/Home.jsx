import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoriesMenu from "../components/CategoriesMenu";
import MealCard from "../components/MealCard";
import RandomMeal from "../components/RandomMeal";
import { fetchCategories } from "../store/categoriesSlice";
import { fetchPopularMeals, fetchRandomRecipe } from "../store/mealsSlice"

function Home() {
    const dispatch = useDispatch();
    const { categories, status } = useSelector(state => state.categories)
    const { randomMeal, popularMeals } = useSelector(state => state.meals)
    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(fetchRandomRecipe())
        dispatch(fetchPopularMeals())
    }, [])
    return (
        <>
            <RandomMeal title={randomMeal.strMeal} imageSrc={randomMeal.strMealThumb} />
            <CategoriesMenu list={categories} />
            {popularMeals.map((meal) => {
                return <MealCard title={meal.strMeal} imageUrl={meal.strMealThumb} country={meal.strArea} />
            })}
        </>
    )
}

export default Home;