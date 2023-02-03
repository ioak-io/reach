import { Article } from './ArticleType';

export type ReachArticleDataPageType = {
  data: Article[];
  pageCount?: number;
  hasMore?: any;
  currentPage: number;
};
