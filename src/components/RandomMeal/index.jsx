function RandomMeal({ title, imageSrc }) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={imageSrc} />
        </div>
    );
}

export default RandomMeal;