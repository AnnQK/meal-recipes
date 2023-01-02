import { Link } from "react-router-dom";

function MealCard({ title, imageUrl, country, idMeal }) {
    return (
        <Link to={`/meals/${idMeal}`}>
            <img src={imageUrl} />
            <p>{title}</p>
            <p>{country}</p>
        </Link>
    );
}

export default MealCard;