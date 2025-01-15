import { AlignCenter, SendIcon } from 'lucide-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

// function SearchBar() {
//     const [input, setInput] = useState<string>("");
//     const [dropDown, setDropdown] = useState<string>("Latest");
//     const navigate = useNavigate();

//     const handleSerchClick =()=>{
//         navigate(`/marketplace?input=${encodeURIComponent(input)}&DropDown=${encodeURIComponent(dropDown)}`)
//     }
    
//   return (
//     <div className=" bg-white rounded flex items-center w-92 p-3 shadow-sm border border-gray-200">
//         <button className="outline-none focus:outline-none" onClick={handleSerchClick}><svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
//         <input type="search" name="" id="" placeholder="search packages" x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" onChange={(e)=>{setInput(e.target.value)}}/>
//         <div className="select">
//         <select name="" id="" x-model="image_type" className="text-sm outline-none focus:outline-none bg-transparent" onChange={(e)=>{setDropdown(e.target.value)}}>
//             <option value="latest" selected >Latest</option>
//             <option value="top_rated">Top Rated</option>
//             <option value="most_download">Most Download</option>
//             </select>
//         </div>
//     </div>
//   )
// }

// import React from "react";

const SearchBar: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const navigate = useNavigate();

    const handleSerchClick =()=>{
        navigate(`/marketplace?input=${encodeURIComponent(input)}`)
    }
  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative sm:w-4/5">
        <input
          type="text"
          placeholder="Search for a template..."
          className="w-full px-4 py-2 pr-10 text-sm text-gray-100 placeholder-gray-400 bg-gray-800 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e)=>{setInput(e.target.value)}}
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 text-sm rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleSerchClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;