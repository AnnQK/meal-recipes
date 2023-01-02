import { useEffect } from "react";
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
    return (<div></div>);
}

export default SingleMeal;