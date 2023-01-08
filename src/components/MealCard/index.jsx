import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Button, Card, CardContent, CardActions, CardMedia, Link, Typography, CardActionArea } from '@mui/material/';

function MealCard({ title, imageUrl, country, idMeal }) {
    const navigate = useNavigate();

    const showSingleMealHandler = () => {
        navigate(`/meals/${idMeal}`)
    }
    return (
        <Card sx={{ width: 300, height: 400, display: "flex", flexDirection: "column" }}>
            <CardMedia
                sx={{ height: 250, width: 300 }}
                image={imageUrl}
                lazy="true"
                title={`${title} meal preview`} />
            <CardContent>
                <Link component={RouterLink} to={`/meals/${idMeal}`} underline={"none"}>
                    <Typography align="center" sx={{ color: "primary.dark" }}>
                        {title}
                    </Typography>
                </Link>
                <Typography align="center" sx={{ color: "text.secondary" }}>
                    {country}
                </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: "auto" }}>
                <Button onClick={showSingleMealHandler} variant="contained" sx={{ margin: "0 auto" }}>See recipe</Button>
            </CardActions>
        </Card >
    );
}

export default MealCard;