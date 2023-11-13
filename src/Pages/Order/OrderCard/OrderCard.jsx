
const OrderCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <p className="bg-black text-white absolute right-0 mt-4 mr-4 px-3 rounded">${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline border-0 md:border-b-4 border-b-yellow-400 text-yellow-500">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;