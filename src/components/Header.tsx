import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import styles from "./Header.module.css";

export default function Header() {

    return (
        <header className={styles.header_area}>
            <div className={styles.header}>
                <Link href="/"><div className={styles.logo}>pati</div></Link>
                <div className={styles.button_set}>
                    <Link href="/menu"><Button>Menü</Button></Link>
                    <Button>Sepet</Button>
                </div>
            </div>
        </header>
    )
}