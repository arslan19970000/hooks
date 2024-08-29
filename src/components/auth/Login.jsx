import axios from 'axios';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate =useNavigate();
   
    const [password, setPassword] = useState('');
    const [Email,setEmail]=useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
      

        var getUserData=JSON.parse(localStorage.getItem("get"));
        console.log(getUserData);
        if(getUserData.email==Email && getUserData.password==password)
        {
            navigate("/home")
        }
        else{
            navigate("/login");
            console.log("invalid crdentails")
        }
        setEmail('');
        setPassword('');
        // axios.post("https://66cc6d75a4dd3c8a71b79624.mockapi.io/cruud",{
        //     e_username:username,
        //     e_password:password,
        //     e_Email:Email

         
        // })
        
        
      //  if (username === 'user' && password === 'password'&& Email==='email') {
          //  alert('Login successful!');
    
       // } else {
      ////      alert('Incorrect username or password');
       // }
      
    };
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                   
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
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;

