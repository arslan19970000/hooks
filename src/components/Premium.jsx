import React from 'react';

function ProductList() {

 const storedData =JSON.parse( localStorage.getItem('arrayData'));
  console.log("storedData-->",storedData);

  return (
    <div className="p-8 mt-10">
      <h1 className="text-2xl font-bold mb-4">user data</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {storedData.map(user => (
          <li key={user.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={user.image} 
              alt={user.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h4 className='text-black'> id: {user.id}</h4>
              <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
              <p className="text-gray-700">{user.title}</p>
              <p className="text-lg font-bold">${user.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
