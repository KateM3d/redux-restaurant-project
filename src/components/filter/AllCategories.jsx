import Filter from "./Filter";

const AllCategories = () => {
  return (
    <>
      <h2>What kind of food do you like?</h2>
      {["SEAFOOD", "ITALIAN", "APPETIZERS", "SALADS", "ALL"].map((category) => (
        <Filter category={category} />
      ))}
    </>
  );
};

export default AllCategories;
