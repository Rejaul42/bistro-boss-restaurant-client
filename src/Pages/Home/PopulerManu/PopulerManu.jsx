
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopulerManu = () => {
    const [menu] = useMenu()
    const populer = menu?.filter(item => item.category === "popular")
    return (
        <div className="mb-12">
            <section>
                <SectionTitle
                subheading="Check it out"
                heading="FROM OUR MENU"
                >
                </SectionTitle>
            </section>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    populer.map( item => 
                    <MenuItem key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center items-center mt-12">
                <button className="btn btn-outline border-0 md:border-b-4 border-b-slate-600 text-black">View Full  Menu</button>
            </div>
        </div>
    );
};

export default PopulerManu;