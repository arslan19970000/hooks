import React from 'react';
import down from '../assets/image/down.jpeg'; // 

const DownloadCard = () => {
    const handleDownload = () => {
        
        const link = document.createElement('a');
        link.href = 'path-to-your-file'; 
        link.download = 'filename.extension'; 
        link.click();
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
                <img src={down} alt={down} className="w-24 h-24 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4 text-gray-700">Download Our App</h2>
                <p className="text-gray-600 mb-6">
                    Get the latest version of our app for the best experience.
                </p>
                <button 
                    onClick={handleDownload} 
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
                >
                    Download Now
                </button>
            </div>
        </div>
    );
};

export default DownloadCard;
