import { SetStateAction } from 'react';

import { useGetCategoriesQuery } from '../redux/services/categoryApi';

type CategoriesProps = {
  setCategoryId: (value: SetStateAction<number>) => void;
};

const Categories = ({ setCategoryId }: CategoriesProps) => {
  const { data } = useGetCategoriesQuery();

  if (!data) {
    return null;
  }

  return (
    <section
      style={{
        display: 'flex',
        padding: '0px 24px',
      }}
    >
      <button onClick={() => setCategoryId(0)}>All</button>
      {data.slice(0, 5).map((category) => (
        <button
          key={category.id}
          onClick={() => setCategoryId(category.id)}
        >
          {category.name}
        </button>
      ))}
    </section>
  );
};

export default Categories;
