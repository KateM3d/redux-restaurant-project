import Dish from "./Dish";
import dishesData from "../../dataDishes";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice";

const Dishes = () => {
  const selectedCategory = useSelector(getSelectedCategory);
  return (
    <>
      {dishesData
        .filter((dish) => {
          if (selectedCategory === "ALL") {
            return true;
          }
          return selectedCategory === dish.category;
        })
        .map((item) => {
          const { id, name, img, price } = item;
          return <Dish id={id} name={name} img={img} price={price} />;
        })}
    </>
  );
};

export default Dishes;
