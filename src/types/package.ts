export interface Package {
  _id:string;
  packageName:string;
  description:string;
  user:{
    username:string;
    email:string;
  },
  availableMarkdowns:{
    [key: string]: string;
  };
  thumbnail:string;
  createdAt:string;
  updatedAt:string;
  documentUrls?: string[];
}
