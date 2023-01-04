import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleMeal } from "../store/mealsSlice";

function SingleMeal() {
    const [ingredients, setIngredients] = useState([]);
    const { mealId } = useParams()
    const { singleMeal } = useSelector(state => state.meals);
    const dispatch = useDispatch();

    const getIngredients = () => {
        let ingredientString = "strIngredient";
        let measureString = "strMeasure";
        let ingredientArr = []
        for (let i = 1; i <= 20; i++) {
            if (singleMeal[ingredientString + i]) {
                const fullIngredient = {
                    id: i,
                    ingredient: singleMeal[ingredientString + i],
                    measure: singleMeal[measureString + i],
                }
                ingredientArr = [...ingredientArr, fullIngredient]
            }
        }
        setIngredients(ingredientArr)

    }

    useEffect(() => {
        dispatch(fetchSingleMeal(mealId))
    }, []);

    useEffect(() => {
        getIngredients()
    }, [singleMeal.idMeal])

    return (
        <div>
            <h2>{singleMeal.strMeal}</h2>
            <Link to={`/areas/${singleMeal.strArea}`}>{singleMeal.strArea}</Link>
            <Link to={`/categories/${singleMeal.strCategory}`}>{singleMeal.strCategory}</Link>
            <img src={singleMeal.strMealThumb} alt="" />
            <p>{singleMeal.strInstructions}</p>
            {
                ingredients.map((item) => {
                    return <p key={item.id}>{item.ingredient} - {item.measure}</p>
                })
            }
        </div>
    );
}

export default SingleMeal;