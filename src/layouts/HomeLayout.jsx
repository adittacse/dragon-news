import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section className="w-11/12 mx-auto mt-[30px]">
                    <LatestNews />
                </section>
            </header>
            <main>
                <section className="left-nav"></section>
                <section className="main">
                    <Outlet />
                </section>
                <section className="right-nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;