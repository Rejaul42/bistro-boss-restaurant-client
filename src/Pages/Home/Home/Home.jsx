import Banner from "../Banner/Banner";
import Category from "../Categorys/Category";


const Home = () => {
    return (
        <div className="max-w-7xl">
            <Banner></Banner>
            <Category></Category>
            <p>This is home</p>
        </div>
    );
};

export default Home;