import Categories from "../Components/Categories";
import Goproducts from "../Components/Goproducts";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Goproducts />
    </>
  );
};

export default Home;
