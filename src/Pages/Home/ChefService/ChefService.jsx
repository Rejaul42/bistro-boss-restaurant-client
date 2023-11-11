import img from "../../../assets/home/chef-service.jpg"

const ChefService = () => {
    return (
        <div className="my-16">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img} className="w-full" />
                <div className="absolute text-center bg-white p-20 mx-20 transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <h2 className="uppercase text-4xl font-medium mb-6">Bistro Boss</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto <br /> ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default ChefService;