import { Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled(Paper)(props => ({
    margin: "100px auto 0",
    width: "clamp(300px,58.3vw,700px)",
    height: "clamp(300px,58.3vw,700px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${props.imagesrc})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    cursor: "pointer",
}));

const MainHeader = styled(Typography)`
display:block;
font-size:clamp(20px,3.125vw,60px);
background-color:#FFF;
width: clamp(300px,58.3vw,700px);
text-align:center;
`

function RandomMeal({ title, imageSrc, idMeal }) {
    const navigate = useNavigate()
    const randomMealRoute = () => {
        navigate(`/meals/${idMeal}`)
    }
    return (
        <StyledContainer onClick={randomMealRoute} elevation={3} imagesrc={imageSrc}>
            <MainHeader component={"h1"}>{title}</MainHeader>
        </StyledContainer>
    );
}

export default RandomMeal;