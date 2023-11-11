import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg"
import "./FeaturedItem.css"
const FeaturedItem = () => {
    return (
        <div className="featured-item bg-opacity-30 text-white">
            <section className="pb-28 pt-12 px-32">
                <SectionTitle subheading="FROM OUR MENU" heading="Check it out">

                </SectionTitle>
                <div className="md:flex justify-center items-center gap-10 ">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className="text-white space-y-3">
                        <p>March 20, 2023</p>
                        <h3>WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-b-4 text-white">Read More</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturedItem;