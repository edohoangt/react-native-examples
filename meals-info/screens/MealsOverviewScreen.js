import { useEffect } from "react";
import MealsList from "../components/meals-list/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const cateId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(cateId) >= 0;
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id == cateId).title;
    navigation.setOptions({ title: categoryTitle });
  }, [cateId, navigation]);

  return <MealsList mealItems={displayedMeals} />;
}

export default MealsOverviewScreen;
