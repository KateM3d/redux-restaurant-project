const ChangeQuantity = ({ quantity, setQuantity }) => {
  const handleAddQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleReduceQuantity = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div>
      <button onClick={handleReduceQuantity}>+</button>
      <span>{quantity}</span>
      <button onClick={handleAddQuantity}>+</button>
    </div>
  );
};

export default ChangeQuantity;
