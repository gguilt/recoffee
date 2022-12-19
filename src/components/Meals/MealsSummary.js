import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious coffee, delivered for you</h2>

      <p>
        Choose your favorite brand of coffee from our broad selection of
        available, high quality coffee and enjoy a moment of peace.
      </p>

      <p>
        All our coffees are prepared with high-quality ingredients, just-in-time
        and by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
