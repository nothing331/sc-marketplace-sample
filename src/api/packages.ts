import axios from 'axios';
import { Package } from '../types/package';
import network_service from '../utils/network_service';
import { PACKAGE } from '../constants/api_constants';

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
    screenshots: [`https://picsum.photos/seed/${startIndex + i}/800/600`,`https://picsum.photos/seed/${startIndex + i}/800/600`,`https://picsum.photos/seed/${startIndex + i}/800/600`,`https://picsum.photos/seed/${startIndex + i}/800/600`,`https://picsum.photos/seed/${startIndex + i}/800/600`],
    readme: "hey",
  }));
};

export const fetchPackages = async (page: number): Promise<Package[]> => {
  // await delay(1000); // Simulate network delay
  // return generateDummyPackages(page);
  try {
    // const response = await axios.get('https://4275r.wiremockapi.cloud/packages/dummy');
    const response = await network_service.get<any>({url:PACKAGE})
    console.log(response.data.packages)
    return response.data.packages; 
  } catch (error) {
    console.error('Error fetching packages:', error);
    throw error; 
  }
};