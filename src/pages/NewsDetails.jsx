import { useLoaderData, useParams } from 'react-router';
import Header from '../components/Header';
import RightAside from '../components/homeLayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useEffect, useState } from 'react';

const NewsDetails = () => {
    const [news, setNews] = useState({});
    const data = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const newsDetails = data.find(newsData => newsData.id === id);
        setNews(newsDetails);
    }, [data, id]);
    
    return (
        <div>
            <header>
                <Header />
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-6">
                <section className="col-span-9">
                    <h3 className="text-[20px] font-semibold mb-5">News Details</h3>
                    <NewsDetailsCard news={news} />
                </section>
                <aside className="col-span-3">
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;