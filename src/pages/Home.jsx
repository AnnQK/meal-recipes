import { Divider, Typography } from "@mui/material";
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
    const { randomMeal, popularMeals } = useSelector(state => state.meals)
    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(fetchRandomRecipe())
        dispatch(fetchPopularMeals())
    }, [])
    return (

        <>
            <RandomMeal title={randomMeal.strMeal} imageSrc={randomMeal.strMealThumb} idMeal={randomMeal.idMeal} />
            <Divider sx={{ margin: "20px 0" }}>
                <Typography variant="h6" component="span">Categories</Typography>
            </Divider>
            <CategoriesMenu list={categories} />
            <Divider sx={{ margin: "20px 0" }}>
                <Typography variant="h6" component="span">Popular meals</Typography>
            </Divider>
            {popularMeals.map((meal) => {
                return <MealCard key={meal.idMeal} idMeal={meal.idMeal} title={meal.strMeal} imageUrl={meal.strMealThumb} country={meal.strArea} />
            })}
        </>
    )
}

export default Home;