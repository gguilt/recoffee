import FoodItem from "./FoodItem";

const FoodList = () => {
    return (
        <main>
            Yemekler
            <hr />
            <FoodItem name="Schnitzel" price="40" />
            <FoodItem name="Patates Kızartması" price="20" />
            <FoodItem name="İç Pilav" price="30" />
            <FoodItem name="El Açması Mantı" price="35" />
            <FoodItem name="Karnıyarık" price="36" />
        </main>
    );
}

export default FoodList;