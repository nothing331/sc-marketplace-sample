import { Package } from "./package";

export interface User {
  id: string;
  email: string;
  displayName: string;
  fullName:string;
  avatarUrl: string ;
  createdAt: string;
}

export interface UserProfile extends User {
  bio: string | null;
  website: string | null;
  location: string | null;
  githubUsername: string | null;
  twitterUsername: string | null;
}