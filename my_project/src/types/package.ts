// export interface Package {
//   id: string;
//   name: string;
//   description: string;
//   author: string;
//   price: number;
//   downloads: number;
//   rating: number;
//   tags: string[];
//   thumbnail: string;
//   createdAt: string;
//   version: string;
//   screenshots: string[];
//   demoUrl?: string;
//   updatedAt: string;
// }

export interface Package {
  id: string;
  name: string;
  description: string;
  author: string;
  rating: number;
  downloads: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  version: string;
  screenshots: string[];
  demoUrl?: string;
  changelog: {
    version: string;
    date: string;
    bio: string;
  }[];
}