import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section className="w-11/12 mx-auto mt-[30px]">
                    <LatestNews />
                </section>
                <nav className="mt-[22px] w-11/12 mx-auto">
                    <Navbar />
                </nav>
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