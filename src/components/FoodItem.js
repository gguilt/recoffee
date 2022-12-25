import classes from "./FoodItem.module.css";

const FoodItem = props => {
    return (
        <div className={classes.food_item}>
            {props.name} - {(+props.price - 0.01).toFixed(2)}TL
        </div>
    )
}

export default FoodItem;