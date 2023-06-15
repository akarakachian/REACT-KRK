import cart from "./src/loguito.png";

const styles = {
  img: {
    height: "3rem",
    width: "auto",
  },
};

export const CartWidget = () => (
  <>
    <img src={cart} style={styles.img} alt="Carrito" /> <span>1</span>
  </>
);
