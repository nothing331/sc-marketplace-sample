import { Package } from '../types/package';

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Dummy data generator
const generateDummyPackages = (page: number): Package[] => {
  const startIndex = (page - 1) * 12;
  return Array.from({ length: 12 }, (_, i) => ({
    id: `pkg-${startIndex + i}`,
    name: `Package ${startIndex + i + 1}`,
    description: `A beautiful package that does amazing things. This is package number ${startIndex + i + 1}.`,
    author: `Developer ${i + 1}`,
    price: Math.floor(Math.random() * 100),
    downloads: Math.floor(Math.random() * 10000),
    rating: 3 + Math.random() * 2,
    tags: ['ui', 'components', 'flutter'],
    // Using a more reliable image service with specific dimensions
    thumbnail: `https://picsum.photos/seed/${startIndex + i}/800/600`,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    version: "1.2.3",
    screenshots: [`https://picsum.photos/seed/${startIndex + i}/800/600`,`https://picsum.photos/seed/${startIndex + i}/800/600`,`https://picsum.photos/seed/${startIndex + i}/800/600`,`https://picsum.photos/seed/${startIndex + i}/800/600`,`https://picsum.photos/seed/${startIndex + i}/800/600`]
  }));
};

export const fetchPackages = async (page: number): Promise<Package[]> => {
  await delay(1000); // Simulate network delay
  return generateDummyPackages(page);
};