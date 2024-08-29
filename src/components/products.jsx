import React, { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='h-11 w-full mt-64'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {products.map((product) => (
                    <div key={product.id} className='bg-white rounded-xl shadow-xl text-center'>
                        <img src={product.image} alt={product.title} className='w-full h-1/2  rounded-t-xl' />
                        <div className='p-4'>
                            <h2 className='font-bold text-lg'>{product.title}</h2>
                            <label className='block text-sm text-gray-500'>Description:</label>
                            <p className='text-sm text-gray-700'>{product.description}</p>
                            <h4 className='font-semibold text-lg mt-2'>Price: ${product.price}</h4>
                            <button className='bg-yellow-400 rounded-xl'> Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
