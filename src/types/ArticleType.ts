import { ArticleCategory } from './ArticleCategoryType';
import { ArticleTag } from './ArticleTag';

export type Article = {
  id: string;
  title: string;
  description: string;
  views: number;
  helpful: number;
  notHelpful: number;
  createdAt?: string;
  updatedAt?: string;
  categoryId?: string;
  categoryName?: string;
  //   feedback?: Maybe<Array<Maybe<ArticleFeedback>>>;
  tags?: ArticleTag[];
};
