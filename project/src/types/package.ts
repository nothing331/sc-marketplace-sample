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
//   // readme: string;
//   avalableMarkdown:string[];
// }

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
}
