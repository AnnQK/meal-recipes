function MealCard({ title, imageUrl, country }) {
    return (
        <>
            <img src={imageUrl} />
            <p>{title}</p>
            <p>{country}</p>
        </>);
}

export default MealCard;