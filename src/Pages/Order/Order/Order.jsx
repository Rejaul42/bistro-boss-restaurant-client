import { Helmet } from "react-helmet";
import Cover from "../../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg"
import useMenu from "../../../Hooks/useMenu";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import OrderCards from "../OrderCards/OrderCards";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu()
    console.log(category)
    const salad = menu?.filter(item => item.category === "salad")
    const pizza = menu?.filter(item => item.category === "pizza")
    const soup = menu?.filter(item => item.category === "soup")
    const dessert = menu?.filter(item => item.category === "dessert")
    const drinks = menu?.filter(item => item.category === "drinks")
    return (
        <div>
            <Helmet>
                <title>Bistro Boos | Order</title>
            </Helmet>
            <Cover
                menuImg={orderImg}
                title="Order now"
                description="Would you like to try a dish?"
            ></Cover>
            <div className="text-center">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESSERT</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderCards items={salad}></OrderCards>
                    </TabPanel>
                    <TabPanel>
                        <OrderCards items={pizza}></OrderCards>
                    </TabPanel>
                    <TabPanel>
                        <OrderCards items={soup}></OrderCards>
                    </TabPanel>
                    <TabPanel>
                        <OrderCards items={dessert}></OrderCards>
                    </TabPanel>
                    <TabPanel>
                        <OrderCards items={drinks}></OrderCards>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;