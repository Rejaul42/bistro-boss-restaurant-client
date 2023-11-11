import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const PopulerManu = () => {
    const [items, setItems] = useState([])
    useEffect(() =>{
        fetch("manu.json")
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(itm => itm.category === "popular")
            setItems(popularItem)
        })
    
    }, [])
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
                    items.map( item => 
                    <MenuItem key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopulerManu;