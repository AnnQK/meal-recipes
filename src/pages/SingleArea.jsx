import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMealsByArea } from "../store/mealsSlice";
import MealCard from "../components/MealCard";

function SingleArea() {
    const { areaName } = useParams()
    const { meals } = useSelector(state => state.meals)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMealsByArea(areaName))
    }, [])
    return (
        <>
            {meals.map((meal) => {
                return <MealCard key={meal.idMeal} idMeal={meal.idMeal} title={meal.strMeal} imageUrl={meal.strMealThumb} country={meal.strArea} />
            })}
        </>
    );
}

export default SingleArea;