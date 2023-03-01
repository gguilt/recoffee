import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kio Store</title>
        <meta name="description" content="Kio Coffee & Food" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        Kio Store
        <div>Cart (0)</div>
      </header>

      <footer>
        All rights reserved. &copy; 2022-2023.{" "}
        <a href="https://www.gokaygultekin.dev">GG</a>
      </footer>
    </>
  );
}
