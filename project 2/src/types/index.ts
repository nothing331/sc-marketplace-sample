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
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  packages: Package[];
  starredPackages: Package[];
}

export interface Review {
  id: string;
  userId: string;
  packageId: string;
  rating: number;
  comment: string;
  createdAt: string;
  user: {
    name: string;
    avatar: string;
  };
}