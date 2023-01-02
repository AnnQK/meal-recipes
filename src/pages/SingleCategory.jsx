import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import MealCard from "../components/MealCard";
import { fetchMealsByCategory } from "../store/mealsSlice";

function SingleCategory() {
    const { categoryName } = useParams()
    const { meals } = useSelector(state => state.meals);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMealsByCategory(categoryName))
    }, [])

    return (
        <div>
            {meals.map((meal) => {
                return <MealCard key={meal.idMeal} idMeal={meal.idMeal} title={meal.strMeal} imageUrl={meal.strMealThumb} country={meal.strArea} />
            })}
        </div>
    );
}

export default SingleCategory;