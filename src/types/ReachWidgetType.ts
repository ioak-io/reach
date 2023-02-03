import { ReachArticleListMeta } from './ReachArticleListMetaType';

export type ReachWidget = {
  type:
    | 'divider'
    | 'article-primary-list'
    | 'article-secondary-list'
    | 'article-featured-list'
    | 'search-bar'
    | 'category-list'
    | 'tag-list'
    | 'custom';
  identifier?: string;
  articleListMeta?: ReachArticleListMeta;
};
