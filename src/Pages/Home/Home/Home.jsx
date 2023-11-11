import Banner from "../Banner/Banner";
import Category from "../Categorys/Category";
import ChefService from "../ChefService/ChefService";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopulerManu from "../PopulerManu/PopulerManu";


const Home = () => {
    return (
        <div className="max-w-7xl">
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopulerManu></PopulerManu>
            <FeaturedItem></FeaturedItem>
        </div>
    );
};

export default Home;