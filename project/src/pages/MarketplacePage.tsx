import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchPackages } from '../store/slices/packagesSlice';
import Carousel from '../components/Carousel';
import { SearchFilters } from '../components/SearchFilters';
export const MarketplacePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items } = useSelector((state: RootState) => state.packages);

  useEffect(() => {
    dispatch(fetchPackages(Math.ceil(items.length / 12) + 1));
  }, []);
  return (
    // <SearchFilters/>
    <>
    <SearchFilters/>
    <Carousel packages={items} title='Trending Packages' subtitle='Most downloaded packages from the salesescode marketplace'/>
    <Carousel packages={items} title='Top Rated Packages' subtitle='Most rated packages from the salesescode marketplace'/>
    <Carousel packages={items} title='Favourite Packages' subtitle='Most favourite packages from the salesescode marketplace'/>
    </>
   
  );
};
