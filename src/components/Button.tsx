import styles from "./Button.module.css";

type ButtonProps = {
    children: string,
}

export default function Button(props: ButtonProps) {
    return (
        <div className={styles.button}>{props.children}</div>
    )
}