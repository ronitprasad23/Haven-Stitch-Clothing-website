import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'; 
import { ShopContext } from '../context/ShopContext';

const Profile = () => {
  const { backendUrl, token, navigate } = useContext(ShopContext); 
  const [userData, setUserData] = useState({ name: '', email: '', joined: '' });
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    if (!token) {
      setLoading(false); 
      return; 
    }
    
    try {
      setLoading(true);
      const response = await axios.post(
        backendUrl + '/api/user/details', 
        {}, 
        { headers: { token } } 
      );
      
      if (response.data.success) {
        setUserData(response.data.user);
      } else {
        console.error("Failed to fetch user data:", response.data.message);
        navigate('/login');
      }
    } catch (error) {
      console.error("API error:", error);
      navigate('/login'); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
        fetchUserData();
    }
  }, [token]); 
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-10 min-h-[60vh] text-center text-xl">
        Loading Account Details...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 min-h-[60vh]">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b-2 pb-2">My Account</h1>
      
      <div className="flex flex-col md:flex-row gap-10">
        
        <div className="w-full md:w-1/4 bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Settings</h2>
          <ul className="space-y-3">
            <li className="text-lg text-black font-medium cursor-pointer py-1 border-l-4 border-black pl-2">
              Account Details
            </li>
            <li className="text-lg text-gray-600 hover:text-black cursor-pointer py-1 pl-2">
              Change Password
            </li>
            <li className="text-lg text-gray-600 hover:text-black cursor-pointer py-1 pl-2">
              Saved Addresses
            </li>
          </ul>
        </div>

        <div className="w-full md:w-3/4 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Account Details</h2>
          
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold text-gray-700 w-32 inline-block">Name:</span> {userData.name}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-700 w-32 inline-block">Email:</span> {userData.email}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-700 w-32 inline-block">Joined:</span> {userData.joined}
            </p>
          </div>
          
          <button className="mt-8 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Edit Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;