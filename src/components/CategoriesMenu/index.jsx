import { Link as RouterLink } from "react-router-dom";
import { Stack, Link, Paper, Typography, Skeleton } from "@mui/material";

function CategoriesMenu({ list, status }) {
    const fakeItemsList = new Array(15).fill(1)
    const componentContent = status === "success" ?
        list.map((category) => {
            return (
                <Paper key={category.idCategory} elevation={2} variant={"elevation"} sx={{ padding: "5px 10px" }}>
                    <Link component={RouterLink} to={`/categories/${category.strCategory}`} underline={"none"}>
                        <Typography>
                            {category.strCategory}
                        </Typography>
                    </Link>
                </Paper>
            )
        })
        :
        <>
            {fakeItemsList.map((_, idx) => {
                return <Skeleton key={idx} sx={{ height: 50, width: 60 }} />
            })}
        </>
    return (
        <Stack direction={"row"} spacing={1} justifyContent="center"
            alignItems="center" >
            {componentContent}
        </Stack>
    );
}

export default CategoriesMenu;