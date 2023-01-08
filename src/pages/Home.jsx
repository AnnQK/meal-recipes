import { Divider, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardWrapper from "../components/CardWrapper";
import CategoriesMenu from "../components/CategoriesMenu";
import MealCard from "../components/MealCard";
import RandomMeal from "../components/RandomMeal";
import { fetchCategories } from "../store/categoriesSlice";
import { fetchPopularMeals, fetchRandomRecipe } from "../store/mealsSlice"

function Home() {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories)
    const { randomMeal, popularMeals, status } = useSelector(state => state.meals)
    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(fetchRandomRecipe())
        dispatch(fetchPopularMeals())
    }, [])
    return (
        <>
            <RandomMeal status={status} title={randomMeal.strMeal} imageSrc={randomMeal.strMealThumb} idMeal={randomMeal.idMeal} />
            <Divider sx={{ margin: "20px auto", color: 'info.main' }}>
                <Typography variant="h6" component="span">Categories</Typography>
            </Divider>
            <CategoriesMenu list={categories} status={status} />
            <Divider sx={{ margin: "20px auto", color: 'info.main' }}>
                <Typography variant="h6" component="span">Popular meals</Typography>
            </Divider>
            <CardWrapper list={popularMeals} status={status} />
        </>
    )
}

export default Home;