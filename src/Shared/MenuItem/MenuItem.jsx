
const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="flex gap-4 space-y-2">
            <img className="h-[100px] w-[120px] rounded-r-full rounded-b-full" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}------------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;