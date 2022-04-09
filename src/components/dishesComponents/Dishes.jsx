import Dish from "./Dish";
import dishesData from "../../dataDishes";

const Dishes = () => {
  return (
    <>
      {dishesData.map((item) => {
        const { id, name, img, price } = item;
        return <Dish id={id} name={name} img={img} price={price} />;
      })}
    </>
  );
};

export default Dishes;
