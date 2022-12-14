import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/";
const DEV_API_KEY = "1";

export const getCategories = async () => {
  const res = await axios.get(`${BASE_URL}${DEV_API_KEY}/categories.php`);
  return res;
};

export const getMealsByCategory = async (categoryName) => {
  const res = await axios.get(
    `${BASE_URL}${DEV_API_KEY}/filter.php?c=${categoryName}`,
  );
  return res;
};

export const getsingleMeal = async (mealId) => {
  const res = await axios.get(
    `${BASE_URL}${DEV_API_KEY}/lookup.php?i=${mealId}`,
  );
  return res;
};

export const getAreas = async () => {
  const res = await axios.get(`${BASE_URL}${DEV_API_KEY}/list.php?a=list`);
  return res;
};

export const getMealsByArea = async (areaName) => {
  const res = await axios.get(
    `${BASE_URL}${DEV_API_KEY}/filter.php?a=${areaName}`,
  );
  return res;
};

export const getRandomRecipe = async () => {
  const res = await axios.get(`${BASE_URL}${DEV_API_KEY}/random.php`);
  return res;
};

export const getFullRecipe = async (mealId) => {
  const res = await axios.get(
    `${BASE_URL}${DEV_API_KEY}/lookup.php?i=${mealId}`,
  );
  return res;
};

// TODO: add requests for images
