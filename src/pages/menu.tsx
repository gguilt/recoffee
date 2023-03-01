import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Menu.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Menu() {
  const yemekler = [
    {
      image: "pilav.jpg",
      name: "İç Pilav",
      description: "Asya pirincinin lezzeti...",
      price: 45,
    },
    {
      image: "schnitzel.jpg",
      name: "Schnitzel",
      price: 69,
    },
    {
      image: "biftek.jpg",
      name: "Biftek",
      price: 99,
    },
    {
      image: "pizza.jpg",
      name: "Pizza",
      price: 69,
    },
    {
      image: "kaburga.jpg",
      name: "Kaburga",
      price: 109,
    }
  ]

  return (
    <>
      <Head>
        <title>Pati</title>
        <meta name="description" content="Paticafe website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        {yemekler.map((y) => {
          return (
            <div className={styles.food} key={y.name}>
              <div>
                <Image alt={y.name} width={100} height={100} src={"/images/" + y.image} />
              </div>

              <div>
              <em>{y.description}</em>
                <div className={styles.food_detail}>
                  <Link href={`/urun/${y.name.replaceAll(' ', '-').toLowerCase()}`}>
                    <span>{y.name}</span>
                    
                  </Link>
                  <span>{y.price}TL</span>
                </div>
                <Button>Sepete ekle</Button>
              </div>
              
            </div>
          )
        })}
      </main>

      <Footer />
    </>
  )
}
