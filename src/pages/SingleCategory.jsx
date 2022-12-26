import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMealsByCategory } from "../store/mealsSlice";

function SingleCategory() {
    const categoryName = useParams()
    console.log(categoryName)
    // const { meals } = useSelector(state => state.meals);
    // const dispatch = useDispatch();
    // console.log(meals)

    // useEffect(() => {
    //     dispatch(fetchMealsByCategory())
    // }, [])
    return (
        <div>
            Category
        </div>
    );
}

export default SingleCategory;