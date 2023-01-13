import Button from "./Button";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header_area}>
            <div className={styles.header}>
                <div className={styles.logo}>pati</div>
                <div className={styles.button_set}>
                    <Button>Menü</Button>
                    <Button>Sepet</Button>
                </div>
            </div>
        </header>
    )
}