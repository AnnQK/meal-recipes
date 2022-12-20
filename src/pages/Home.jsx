import { useEffect } from "react";
import { fetchRandomRecipe } from "../store/mealsSlice";
import { useDispatch, useSelector } from "react-redux";

function Home() {
    const dispatch = useDispatch();
    const { randomMeal, status } = useSelector(state => state.meals)
    console.log(status)
    useEffect(() => {
        dispatch(fetchRandomRecipe())

    }, [])
    return (<div>
        <div>meal of the day</div> - <h2>{randomMeal.strMeal}</h2>
        <img src={randomMeal.strMealThumb} />
    </div>);
}

export default Home;