import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Header() {
    return (<div>
        <AppBar>
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{ flexGrow: 1 }}
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