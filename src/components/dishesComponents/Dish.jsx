const Dish = ({ id, img, name, price }) => {
  return (
    <div key={id}>
      <img src={`${img}.jpg`} alt="img" />
      <h2>{name}</h2>
      <p>${price}</p>
    </div>
  );
};

export default Dish;
