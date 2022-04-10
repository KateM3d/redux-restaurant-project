const Dish = ({ id, img, name, price }) => {
  return (
    <div key={id}>
      <img src={`${img}.jpg`} alt="img" />
      <h2>{name}</h2>
      <p>${price}</p>
      {/*to fix later*/}
      <button>How many portions??</button>
      <button>Add to cart</button>
    </div>
  );
};

export default Dish;
