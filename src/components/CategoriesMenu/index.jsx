import { NavLink } from "react-router-dom";

function CategoriesMenu({ list }) {
    return (
        <ul>
            {list.map((category) => {
                return <li>
                    <NavLink to="">
                        {category.strCategory}
                    </NavLink>
                </li>
            })}
        </ul>
    );
}

export default CategoriesMenu;