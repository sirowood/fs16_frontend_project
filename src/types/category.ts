type CategoryBase = {
  name: string,
  image: string,
};

type Category = CategoryBase & {
  id: number,
}

export default Category;
