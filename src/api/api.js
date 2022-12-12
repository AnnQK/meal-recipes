import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/";
const DEV_API_KEY = "1";

export const getCategories = async () => {
    const res = await axios.get(`${BASE_URL}${DEV_API_KEY}/categories.php`)
    return res
}

export const getAreas = async () => {
    const res = await axios.get(`${BASE_URL}${DEV_API_KEY}/list.php?a=list`)
    return res
}

export const getRandomRecipe = async () => {
    const res = await axios.get(`${BASE_URL}${DEV_API_KEY}/random.php`)
    return res
}

// TODO: add requests for images