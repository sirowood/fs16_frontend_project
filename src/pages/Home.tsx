import Main from '../components/Main';
import Billboard from '../components/home/Billboard';
import WhyUs from '../components/home/WhyUs';
import FeaturedProducts from '../components/home/FeaturedProducts';

const Home = () => {
  return (
    <Main>
      <Billboard />
      <FeaturedProducts />
      <WhyUs />
    </Main>
  );
};

export default Home;
