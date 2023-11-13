import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="my-16">
            <div>
                {
                    title && <Cover title={title} menuImg={coverImg} description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
                }
            </div>
            <div className="grid md:grid-cols-2 gap-10 my-8 px-12">
                {
                    items?.map(item =>
                        <MenuItem key={item._id}
                            item={item}
                        ></MenuItem>)
                }

            </div>
            <div className="flex justify-center items-center">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 md:border-b-4 border-b-slate-600 text-black">View Full  Menu</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;