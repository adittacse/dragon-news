import Header from '../components/Header';
import RightAside from '../components/homeLayout/RightAside';

const NewsDetailsLoading = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-6">
                <section className="col-span-9">
                    <div className="min-h-screen flex justify-center items-center">
                        <span className="loading loading-spinner text-error"></span>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetailsLoading;