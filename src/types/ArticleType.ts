import { ArticleCategory } from './ArticleCategoryType';
import { ArticleTag } from './ArticleTag';

export type Article = {
  id: string;
  title: any[];
  description: any[];
  views: number;
  helpful: number;
  notHelpful: number;
  createdAt?: string;
  updatedAt?: string;
  categoryId?: string;
  //   feedback?: Maybe<Array<Maybe<ArticleFeedback>>>;
  tags?: ArticleTag[];
};
