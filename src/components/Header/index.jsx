import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const returnHomeHandler = () => {
        navigate("/")
    }

    return (<div>
        <AppBar>
            <Toolbar>
                <Typography
                    onClick={returnHomeHandler}
                    variant="h6"
                    component="span"
                    sx={{ flexGrow: 1, cursor: "pointer" }}
                >
                    React Recipes
                </Typography>
                <IconButton
                    color="inherit">
                    <FavoriteIcon />
                </IconButton>

            </Toolbar>
        </AppBar>
    </div>);
}

export default Header;