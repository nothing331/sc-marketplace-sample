import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchPackages } from '../store/slices/packagesSlice';
import Carousel from '../components/Carousel';
import { SearchBar } from '../components/SearchBar';
export const MarketplacePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items ,status} = useSelector((state: RootState) => state.packages);

  useEffect(() => {
    dispatch(fetchPackages());
  }, []);

  if(status=='loading'){
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
    <SearchBar/>
    <Carousel packages={items} title='Trending Packages' subtitle='Most downloaded packages from the salesescode marketplace'/>
    <Carousel packages={items} title='Top Rated Packages' subtitle='Most rated packages from the salesescode marketplace'/>
    <Carousel packages={items} title='Favourite Packages' subtitle='Most favourite packages from the salesescode marketplace'/>
    </>
  );
};
