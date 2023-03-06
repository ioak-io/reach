import { ArticleCategory } from './ArticleCategoryType';
import { ArticleTag } from './ArticleTag';

export type Article = {
  id: string;
  title: string;
  summary?: string;
  description: string;
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
