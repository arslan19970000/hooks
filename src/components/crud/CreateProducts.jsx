import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import user from '../Api';
import axios from 'axios';

const CreateProducts = () => {
    const [username, setusername] = useState('');
    const [Price, setPrice] = useState('');
    const [Title, setTitle] = useState('');
    const [Url, setUrl] = useState('');

    const navigate = useNavigate();
   

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
       
        const allData = {
            id: Math.random() + 2,
        
name: username,
            title: Title,
            price: Price,
            image: Url
        };
      //  user.push(allData);
        const apiData=[]
        console.log(apiData);
        apiData.unshift(allData);


        localStorage.setItem('arrayData', JSON.stringify(apiData));
    

        navigateToPremium(); 
    };

    const navigateToPremium = () => {
        navigate("/premium");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Create</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">username:</label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setusername(e.target.value)} 
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Title:</label>
                        <input 
                            type="text" 
                            value={Title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Price:</label>
                        <input 
                            type="number" 
                            value={Price} 
                            onChange={(e) => setPrice(e.target.value)} 
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Img Url:</label>
                        <input 
                            type="text" 
                            value={Url} 
                            onChange={(e) => setUrl(e.target.value)} 
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                        Create Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateProducts;
