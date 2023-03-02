import styles from "@/styles/MenuItem.module.css";

type MenuItemProps = {
  key: string;
  id: string;
  name: string;
  description: string;
  price: number;
};

const MenuItem = (props: MenuItemProps) => {
  return (
    <div key={props.key} className={styles.menuItem}>
      <header>
        <span className={styles.menuItemName}>{props.name}</span>
        <span className={styles.menuItemPrice}>{props.price}₺</span>
      </header>

      <div className={styles.details}>{props.description}</div>
    </div>
  );
};

export default MenuItem;
