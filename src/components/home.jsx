import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeals } from "../redux/MealReducer";
import Meal from "./Meal";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { meals, statut, erreur } = useSelector((state) => state.meals);

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  if (statut === "loading") {
    return <div>Loading...</div>;
  }

  if (statut === "failed") {
    return <div>Error: {erreur}</div>;
  }

  return (
    <div className="container mx-auto w-75">
      {meals.map((meal) => (
        <Meal key={meal.id} meal={meal} />
      ))}
    </div>
  );
};

export default Home;
