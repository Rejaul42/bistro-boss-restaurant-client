import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const OrderCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item;
    const { user } = useAuth()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const location = useLocation()
    const [, refetch] = useCart()

    const handleAddToCart = () => {
        if(user && user.email){
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                    // refetch cart to update the cart items count
                    refetch()
                }
            })

        }
        else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
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
                        <button onClick={handleAddToCart}
                            className="btn btn-outline border-0 md:border-b-4 border-b-yellow-400 text-yellow-500">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;