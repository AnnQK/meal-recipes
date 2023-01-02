import { NavLink } from "react-router-dom";

function CategoriesMenu({ list }) {
    return (
        <ul>
            {list.map((category) => {
                return (
                    <li key={category.idCategory} >
                        <NavLink to={`/categories/${category.strCategory}`}>
                            {category.strCategory}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    );
}

export default CategoriesMenu;