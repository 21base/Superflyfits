import Categories from "../Components/Categories";
import Goproducts from "../Components/Goproducts";
import Help from "../Components/Help";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Goproducts />
      <Help />
      <Newsletter />
    </>
  );
};

export default Home;
