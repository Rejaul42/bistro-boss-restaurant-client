import Banner from "../Banner/Banner";
import Category from "../Categorys/Category";
import ChefService from "../ChefService/ChefService";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopulerManu from "../PopulerManu/PopulerManu";
import Testomonial from "../Testomonial/Testomonial";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div className="max-w-7xl">
            <Helmet>
                <title>Bistro Boos | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopulerManu></PopulerManu>
            <FeaturedItem></FeaturedItem>
            <Testomonial></Testomonial>
        </div>
    );
};

export default Home;