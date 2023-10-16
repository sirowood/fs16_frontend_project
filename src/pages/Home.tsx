import Main from '../components/Main';
import Billboard from '../components/home/Billboard';
import SeeAll from '../components/home/SeeAll';
import WhyUs from '../components/home/WhyUs';
import FeaturedProducts from '../components/home/FeaturedProducts';

const Home = () => {
  return (
    <Main>
      <Billboard />
      <FeaturedProducts />
      <SeeAll />
      <WhyUs />
    </Main>
  );
};

export default Home;
