import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoriesMenu from "../components/CategoriesMenu";
import MealCard from "../components/MealCard";
import RandomMeal from "../components/RandomMeal";
import { fetchCategories } from "../store/categoriesSlice";
import { fetchPopularMeals, fetchRandomRecipe } from "../store/mealsSlice"

function Home() {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories)
    const { meals, randomMeal, popularMeals } = useSelector(state => state.meals)
    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(fetchRandomRecipe())
        dispatch(fetchPopularMeals())
    }, [])
    return (

        <>
            <RandomMeal title={randomMeal.strMeal} imageSrc={randomMeal.strMealThumb} idMeal={randomMeal.idMeal} />
            <CategoriesMenu list={categories} />
            {popularMeals.map((meal) => {
                return <MealCard key={meal.idMeal} idMeal={meal.idMeal} title={meal.strMeal} imageUrl={meal.strMealThumb} country={meal.strArea} />
            })}
        </>
    )
}

export default Home;