import { Link as RouterLink } from "react-router-dom";
import { List, ListItem, ListItemText, Stack, Link, Paper } from "@mui/material";

function CategoriesMenu({ list }) {
    return (
        <Stack direction={"row"} spacing={1} justifyContent="center"
            alignItems="center" >
            {list.map((category) => {
                return (
                    <Paper elevation={2} variant={"elevation"} sx={{ padding: "5px 10px" }}>
                        <Link component={RouterLink} to={`/categories/${category.strCategory}`} underline={"none"}>
                            {category.strCategory}
                        </Link>
                    </Paper>
                )
            })}
        </Stack>
    );
}

export default CategoriesMenu;