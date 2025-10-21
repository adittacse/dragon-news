import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/Newscard';

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([]);
    const { id } = useParams();
    const newsData = useLoaderData();

    useEffect(() => {
        if (id == "0") {
            setCategoryNews(newsData);
            return;
        } else if (id == "1") {
            const filteredNews = newsData.filter(news => news.others.is_today_pick === true);
            setCategoryNews(filteredNews);
            return;
        } else {
            const filteredNews = newsData.filter(news => news.category_id == id);
            setCategoryNews(filteredNews);
            return;
        }
    }, [id, newsData]);

    return (
        <div>
            <h3 className="text-[20px] font-semibold mb-5">Dragon News Home</h3>
            <div className="grid grid-cols-1">
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news} />)
                }
            </div>
        </div>
    );
};

export default CategoryNews;