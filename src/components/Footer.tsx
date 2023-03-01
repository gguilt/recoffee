import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer_area}>
            <div className={styles.footer}>
                Her hakkı saklıdır (c) 2023. Paticafe
                <a href="https://gokaygultekin.dev">GG</a>
            </div>
        </footer>
    )
}