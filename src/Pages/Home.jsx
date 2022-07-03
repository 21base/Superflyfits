import Categories from "../Components/Categories";
import Goproducts from "../Components/Goproducts";
import Help from "../Components/Help";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Goproducts />
      <Help />
    </>
  );
};

export default Home;
