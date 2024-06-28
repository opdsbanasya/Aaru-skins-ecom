import React, { useState } from 'react';
import LatestProduct from './LatestProduct';
import ProductViewPage from './ProductViewPage';

const SearchPage = () => {

    const [val, setVal] = useState(false)

    return (
        <div className='min-h-screen w-full'>
            { !val ? (
                <ProductViewPage />
            ):(
                <h1>hello</h1>
            )}
        </div>
    );
}

export default SearchPage;
