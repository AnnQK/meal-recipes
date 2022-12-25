import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoriesMenu from "../components/CategoriesMenu";
import RandomMeal from "../components/RandomMeal";
import { fetchCategories } from "../store/categoriesSlice";
import { fetchRandomRecipe } from "../store/mealsSlice"

function Home() {
    const dispatch = useDispatch();
    const { categories, status } = useSelector(state => state.categories)
    const { randomMeal } = useSelector(state => state.meals)
    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(fetchRandomRecipe())
    }, [])
    return (
        <>
            <RandomMeal title={randomMeal.strMeal} imageSrc={randomMeal.strMealThumb} />
            <CategoriesMenu list={categories} />
        </>
    )
}

export default Home;