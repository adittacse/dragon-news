import { FiBookmark, FiShare2, FiEye } from "react-icons/fi";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const { id, author, title, thumbnail_url, details, rating, total_view } = news;

    const date = author?.published_date ? new Date(author.published_date).toISOString().slice(0, 10) : "—";
    const r = Number(rating?.number ?? 0);
    const full = Math.max(0, Math.min(5, Math.floor(r)));
    const hasHalf = r - full >= 0.5 && full < 5;
    const empty = 5 - full - (hasHalf ? 1 : 0);
    
    return (
        <div className="card bg-base-100 border border-base-200 rounded-2xl overflow-hidden mb-[30px]">
            {/* top bar */}
            <div className="flex items-center justify-between bg-base-200 px-4 py-4">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full ring ring-base-300">
                            <img src={author?.img} alt={author?.name} loading="lazy" />
                        </div>
                    </div>
                    <div className="leading-tight">
                        <p className="font-medium">{author?.name}</p>
                        <p className="text-xs text-base-content/60">{date}</p>
                    </div>
                </div>

                <div className="flex items-center gap-1 text-base-content/70">
                    <button className="btn btn-ghost btn-sm" aria-label="Bookmark">
                        <FiBookmark className="text-lg" />
                    </button>
                    <button className="btn btn-ghost btn-sm" aria-label="Share">
                        <FiShare2 className="text-lg" />
                    </button>
                </div>
            </div>

            {/* title */}
            <div className="px-4 mt-3">
                <h2 className="text-xl sm:text-2xl font-extrabold leading-snug">{title}</h2>
            </div>

            {/* image */}
            {
                thumbnail_url && <figure className="px-4 mt-3">
                    <img src={thumbnail_url} alt={title} className="w-full h-56 sm:h-64 object-cover rounded-xl" loading="lazy" />
                </figure>
            }

            {/* excerpt */}
            <div className="px-4 py-4">
                <p className="text-sm sm:text-base text-accent">
                    {
                        details.length > 200 ? <>
                            {details.slice(0, 200)}...
                        </> : details
                    }
                </p>
                <Link to={`/news-details/${id}`} className="link link-hover text-primary font-medium mt-2">
                Read More
                </Link>
            </div>

            {/* divider */}
            <div className="border-t border-base-200" />

            {/* bottom row */}
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-1 text-warning">
                    {/* five filled stars to match screenshot */}
                    {
                        Array.from({ length: full }).map((_, i) => <FaStar key={`f${i}`} className="text-xl" />)
                    }
                    {
                        hasHalf && <FaStarHalfAlt className="text-xl" />
                    }
                    {
                        Array.from({ length: empty }).map((_, i) => <FaRegStar key={`e${i}`} className="text-xl" />)
                    }
                    <span className="ml-2 text-base text-base-content/90">{rating?.number}</span>
                </div>

                <div className="flex items-center gap-2 text-base-content/70">
                    <FiEye className="text-lg" />
                    <span className="text-sm">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;