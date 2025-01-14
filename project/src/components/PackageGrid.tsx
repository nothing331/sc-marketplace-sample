import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchPackages } from '../store/slices/packagesSlice';
import { PackageCard } from './PackageCard';

export const PackageGrid: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, hasMore } = useSelector((state: RootState) => state.packages);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasMore && status !== 'loading') {
      dispatch(fetchPackages(Math.ceil(items.length / 12) + 1));
    }
  }, [inView, hasMore, status, dispatch, items.length]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {items.map((pkg) => (
        <PackageCard key={pkg.id} package={pkg} />
      ))}
      {hasMore && (
        <div ref={ref} className="col-span-full flex justify-center p-4">
          {status === 'loading' && (
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white" />
          )}
        </div>
      )}
    </div>
  );
};