
import { Container } from '@mui/material';

function RandomMeal({ title, imageSrc }) {
    return (
        <Container sx={{ mt: "100px" }}>
            <h2>{title}</h2>
            <img src={imageSrc} />
        </Container>
    );
}

export default RandomMeal;