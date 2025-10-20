import { use } from 'react';

const categoryPromise  = fetch("/categories.json").then(res => res.json());

const Categories = () => {
    const categories = use(categoryPromise);

    return (
        <div>
            <h3 className="text-[20px] font-semibold">All Categories ({categories.length})</h3>
        </div>
    );
};

export default Categories;