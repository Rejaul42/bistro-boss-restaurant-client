import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const offers = menu?.filter(item => item.category === "offered")
    const dessert = menu?.filter(item => item.category === "dessert")
    const salad = menu?.filter(item => item.category === "salad")
    const pizza = menu?.filter(item => item.category === "pizza")
    const soup = menu?.filter(item => item.category === "soup")
    return (
        <div>
            <Helmet>
                <title>Bistro Boos | Menu</title>
            </Helmet>
            <Cover
                menuImg={menuImg}
                title="OUR MENU"
                description="Would you like to try a dish?"
            ></Cover>
            <section>
                <SectionTitle heading="TODAY'S OFFER" subheading="Don't miss"></SectionTitle>
            </section>
            <MenuCategory items={offers}></MenuCategory>
            {/* dessert */}
            <MenuCategory items={dessert} title="dessert" coverImg={dessertImg}></MenuCategory>
            {/* Salad */}
            <MenuCategory items={salad} title="salad" coverImg={saladImg}></MenuCategory>
            {/* pizza */}
            <MenuCategory items={pizza} title="pizza" coverImg={pizzaImg}></MenuCategory>
            {/* soup */}
            <MenuCategory items={soup} title="soup" coverImg={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;