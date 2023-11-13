import { Parallax } from 'react-parallax';


const Cover = ({ menuImg, title, description }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={menuImg}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-white py-30 px-20">
                    <div className="bg-black bg-opacity-25 py-16 px-24">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{description}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;