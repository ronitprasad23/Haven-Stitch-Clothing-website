import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch, backendUrl, setProducts  } = useContext(ShopContext);

   const onSubmitHandler = async (e) => {
        e.preventDefault();
        
        // Send query to the new AI backend endpoint
        try {
            const response = await axios.post(
                backendUrl + '/api/product/ai-filter', 
                { query: search } // Send the user's text as the query
            );

            if (response.data.success) {
                // Temporary: If the backend returns the filter criteria, apply it to products
                const criteria = response.data.filterCriteria; 
                // In a final app, you would dispatch a state update here to filter products
                
                // For now, alert the criteria received (you'll use this in ShopContext)
                alert(`AI Filter Criteria Received: Min=${criteria.priceMin}, Max=${criteria.priceMax}, Category=${criteria.category}`);
                
                // You should navigate to the Collection page to show results
                // navigate('/collection'); // Assuming navigate is passed via context
            } else {
                alert(response.data.message);
            }
            setShowSearch(false);
            setSearch("");

        } catch (error) {
            console.error("AI Search Error:", error);
            alert("Could not process AI query.");
        }
    };
  const [visible,setVisible] = useState(false);
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname.includes("collection")){
      setVisible(true);
    }
    else{
      setVisible(false);
    }
  },[location]);

  return showSearch && visible ? (
    <div className="border-t border-b border-gray-200 bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img src={assets.search_icon} className="w-4" alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        className="inline w-3 cursor-pointer"
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
