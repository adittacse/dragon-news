import { Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";

const NewsDetailsCard = ({ news }) => {
    const { category_id, image_url, title, details } = news;

    return (
        <div className="card">
            <img className="rounded-[5px] w-full h-[410px]" src={image_url} alt="news image" />
            <h2 className="text-xl sm:text-2xl font-extrabold leading-snug mt-5">{title}</h2>
            <p className="text-sm sm:text-base text-accent mt-5">{details}</p>
            <Link to={`/category/${category_id}`} className="btn btn-secondary text-base-100 flex items-center w-fit font-medium text-[20px] mt-8 py-2.5 px-6"><FiArrowLeft /> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;