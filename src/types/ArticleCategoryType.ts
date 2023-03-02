export type ArticleCategory = {
  id: string;
  name?: string;
  articles?: number;
};

export type ArticleCategoryMap = {
  [key: string]: ArticleCategory
}

export const toArticleCategoryMap = (categories: ArticleCategory[]) => {
  const _categoryMap: ArticleCategoryMap = {};
  categories?.forEach((item) => {
    _categoryMap[item.id] = item;
  })
  return _categoryMap;
}
