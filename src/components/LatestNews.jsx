import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex items-center bg-base-200 gap-5 p-4">
            <p className="text-base-100 text-[20px] bg-secondary font-medium py-[9px] px-[24px]">Latest</p>
            <Marquee className="flex items-center gap-5 cursor-pointer" pauseOnHover speed={50}>
                <p className="font-semibold text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, corporis.</p>
                <p className="font-semibold text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, corporis.</p>
                <p className="font-semibold text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, corporis.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;