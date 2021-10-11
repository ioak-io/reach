import { Article } from './ArticleType';

export type ArticleTag = {
  id: string;
  name?: string;
  article?: Article;
};
