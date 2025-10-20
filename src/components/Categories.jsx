import { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise  = fetch("/categories.json").then(res => res.json());

const Categories = () => {
    const categories = use(categoryPromise);

    return (
        <div>
            <h3 className="text-[20px] font-semibold">All Categories ({categories.length})</h3>
            <div className="grid grid-cols-1 mt-5 gap-[30px]">
                {
                    categories.map(category => <NavLink className="text-accent font-medium text-[20px] pl-[50px]" key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;