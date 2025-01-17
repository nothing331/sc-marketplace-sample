import { Package } from "./package";

export interface User {
  id: string;
  email: string;
  displayName: string;
  avatarUrl: string ;
  createdAt: string;
  publishedPackages: Package[];
  pendingPackages: Package[];
  rejectedPackages: Package[];
  starredPackages: Package[];
}

export interface UserProfile extends User {
  bio: string | null;
  website: string | null;
  location: string | null;
  githubUsername: string | null;
  twitterUsername: string | null;
}