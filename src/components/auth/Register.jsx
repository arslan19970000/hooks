    import axios from 'axios';
    import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';



    const Register = () => {
        const navigate=useNavigate();
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [Email,setEmail]=useState('');
        


        const handleSubmit = (e) => {
            e.preventDefault();
            const userData={
                name:username,
                password:password,
                email:Email
            };

            const arrData = [];
            arrData.push(userData);
            localStorage.setItem("get", JSON.stringify(arrData));

            setEmail('');
            setPassword('');
            setUsername('');

            // axios.post("https://66cc6d75a4dd3c8a71b79624.mockapi.io/cruud",{
            //     e_username:username,
            //     e_password:password,
            //     e_Email:Email


            // })
            
            
            navigate("/login");
        };
        

        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                    <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Username:</label>
                            <input 
                                type="text" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700">Email:</label>
                            <input 
                                type="Email" 
                                value={Email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700">Password:</label>
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <button     type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    export default Register;

