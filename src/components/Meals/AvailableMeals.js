import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Çay",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Americano",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Espresso",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Filtre Kahve",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Sütlü Kahve",
    description: "Latte",
    price: 23.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
