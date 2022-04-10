import { useState } from "react";
import ChangeQuantity from "../cart/ChangeQuantity";

const Dish = ({ id, img, name, price }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div key={id}>
      <img src={`${img}.jpg`} alt="img" />
      <h2>{name}</h2>
      <p>${price}</p>
      <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
      <button>How many portions??</button>
      <button>Add to cart</button>
    </div>
  );
};

export default Dish;
