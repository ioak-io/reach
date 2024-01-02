import { Article } from "../types/ArticleType";
import { isEmptyAttributes, isEmptyOrSpaces } from "./TextUtils";

export function getThumbnailFromArticle(article: Article) {
  return "";
}

export function getCategoryName(article: Article, categoryMap?: any) {
  if (!isEmptyOrSpaces(article.categoryName)) { return article.categoryName; }

  if (!isEmptyOrSpaces(article.categoryId) && !isEmptyAttributes(categoryMap)) {
    return categoryMap[article.categoryId || ""]
  }

  return "";
}
