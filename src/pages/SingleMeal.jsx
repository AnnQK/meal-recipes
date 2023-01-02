import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleMeal } from "../store/mealsSlice";

function SingleMeal() {
    const { mealId } = useParams()
    const { singleMeal } = useSelector(state => state.meals);
    const dispatch = useDispatch();
    console.log(singleMeal)


    useEffect(() => {
        dispatch(fetchSingleMeal(mealId))
    }, [])

    return (
        <div>
            <h2>{singleMeal.strMeal}</h2>
            <Link to={`/areas/${singleMeal.strArea}`}>{singleMeal.strArea}</Link>
            <Link to={`/categories/${singleMeal.strCategory}`}>{singleMeal.strCategory}</Link>
            <img src={singleMeal.strMealThumb} alt="" />
            <p>{singleMeal.strInstructions}</p>
        </div>
    );
}

export default SingleMeal;