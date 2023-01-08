import { Card, Grid, Skeleton } from "@mui/material";
import MealCard from "../MealCard";

function CardWrapper({ list, status = "success" }) {
    const fakeMealsList = new Array(9).fill(1);
    const componentContent = status === "success" ? list.map((meal) => {
        return <Grid item key={meal.idMeal}>
            <MealCard idMeal={meal.idMeal} title={meal.strMeal} imageUrl={meal.strMealThumb} country={meal.strArea} />
        </Grid>
    }) : fakeMealsList.map((_, idx) => {
        return <Grid item key={idx}>
            <Card sx={{ width: 300, height: 400, display: "flex", flexDirection: "column" }}>
                <Skeleton variant="rectangle" width={300} height={250} />
                <Skeleton variant="rectangle" width={250} height={60} sx={{ margin: "auto auto" }} />
                <Skeleton variant="rectangle" width={100} height={35} sx={{ margin: "auto auto" }} />
            </Card>
        </Grid>
    })
    return (
        <Grid
            justifyContent="center"
            alignItems="center"
            container
            spacing={3}
            sx={{ margin: "0 auto", maxWidth: "1500px", width: "90%" }}>
            {componentContent}
        </Grid>
    );
}

export default CardWrapper;