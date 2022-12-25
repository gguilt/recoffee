import FoodItem from "./FoodItem";

const FoodList = () => {
    return (
        <main>
            Yemekler
            <hr />
            <FoodItem name="Schnitzel" price="40" />
            <FoodItem name="Patates Kızartması" price="20" />
            <FoodItem name="Kuş üzümlü Pilav" price="30" />
        </main>
    );
}

export default FoodList;