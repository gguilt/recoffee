import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import CartIcon from "@/components/CartIcon";
import MenuItem from "@/components/MenuItem";

export default function Home() {
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

  const mealsList = DUMMY_MEALS.map((meal) => (
    <MenuItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <>
      <Head>
        <title>Kio Store</title>
        <meta name="description" content="Kio Coffee & Food" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>Kio Store</h1>
        <button className={styles.cartButton}>
          <span className={styles.cartIcon}>
            <CartIcon />
          </span>
          <span>Your cart</span>
          <span className={styles.cartBadge}>3</span>
        </button>
      </header>
      <div className={styles.mainImage}>
        <Image
          src="/images/coffee.jpg"
          width={1080}
          height={1620}
          alt="Coffee"
        />
      </div>

      <div className={styles.menuList}>{mealsList}</div>

      <footer className={styles.footer}>
        All rights reserved. &copy; 2022-2023.{" "}
        <a href="https://www.gokaygultekin.dev">GG</a>
      </footer>
    </>
  );
}
