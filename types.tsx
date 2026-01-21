export type BlogPost = {
  id: number;
  title: string;
  image: string;
  date: {
    day: string;
    month: string;
    year: string;
  };
  author: string;
  excerpt: string;
};