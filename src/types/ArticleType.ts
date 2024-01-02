import { ArticleCategory } from './ArticleCategoryType';
import { ArticleTag } from './ArticleTag';

export type Article = {
  id: string;
  title: string;
  summary?: string;
  description: string;
  featuredImage?: string;
  views: number;
  helpful: number;
  notHelpful: number;
  createdBy: string;
  updatedBy: string;
  createdAt?: string;
  updatedAt?: string;
  categoryId?: string;
  categoryName?: string;
  tags?: string[];
};

export const getFeaturedImage = (article: Article) => {
  return article?.featuredImage || "https://images.unsplash.com/photo-1519748771451-a94c596fad67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
}
