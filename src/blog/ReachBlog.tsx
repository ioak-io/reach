import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Article } from '../types/ArticleType';
import ArticleHome from '../components/ArticleHome';
import EditArticle from '../components/EditArticle';
import ViewArticle from '../components/ViewArticle';
import { ReachConfig } from '../types/ReachConfigType';
import './ReachBlog.scss';
import { ReachArticleDataPageType } from '../types/ReachArticleDataPageType';
import CreateArticle from '../components/CreateArticle';

const queryString = require('query-string');

interface Props {
  config: ReachConfig;
  categories: any[];
  tags: any[];
  articleFeaturedListData?: Map<String, Article[]>;
  articleSecondaryListData?: Map<String, ReachArticleDataPageType>;
  articlePrimaryListData?: ReachArticleDataPageType;
  fetchArticlesSecondary: Function;
  fetchArticlesPrimary: Function;
  fetchArticleById: Function;
  saveCategory: any;
  saveArticleSync: any;
  children?: any;
}

const ReachBlog = (props: Props) => {
  const location = useLocation();
  const history = useHistory();
  // const [type, setType] = useState<'home' | 'view' | 'edit'>('home');
  // const [page, setPage] = useState(1);
  const [article, setArticle] = useState<Article | null>(null);
  const [criteria, setCriteria] = useState({
    type: 'home',
    text: null,
    tag: null,
    categoryId: null,
    articleId: null,
  });

  const [slots, setSlots] = useState<any>({});

  useEffect(() => {
    initializeViews();
  }, [props.children]);

  const initializeViews = () => {
    let newSlots = {};
    if (props.children) {
      React.Children.toArray(props.children).forEach((node: any) => {
        newSlots = { ...newSlots, [node.props.slot]: node };
      });
    }
    setSlots(newSlots);
  };

  const [previousCriteria, setPreviousCriteria] = useState({
    type: 'home',
    text: null,
    tag: null,
    categoryId: null,
    articleId: null,
  });

  const [categoryMap, setCategoryMap] = useState<any>({});

  useEffect(() => {
    const _criteria = queryString.parse(location.search);
    setCriteria({
      articleId: _criteria.id,
      categoryId: _criteria.category,
      text: _criteria.text,
      tag: _criteria.tag,
      type: _criteria.type || 'home',
    });
  }, [location.search]);

  useEffect(() => {
    switch (criteria.type) {
      case 'view':
      case 'edit':
        if (previousCriteria.articleId !== criteria.articleId) {
          props
            .fetchArticleById(criteria.articleId)
            .then((response: Article) => {
              setArticle(response);
            });
        }
        break;

      case 'home':
      default:
        if (
          previousCriteria.text !== criteria.text ||
          previousCriteria.tag !== criteria.tag ||
          previousCriteria.categoryId !== criteria.categoryId
        ) {
          props.fetchArticlesPrimary({
            text: criteria.text,
            tag: criteria.tag,
            categoryId: criteria.categoryId,
            pageNo: 1,
          });
        }
        break;
    }
    setPreviousCriteria({ ...criteria });
  }, [criteria]);

  useEffect(() => {
    const _categoryMap: any = {};
    props.categories?.forEach((item: any) => {
      _categoryMap[item.id] = item;
    });
    setCategoryMap(_categoryMap);
  }, [props.categories]);

  const searchByText = (text: string) => {
    history.push(`${location.pathname}?type=home&text=${text}`);
  };

  const searchByCategory = (category: string) => {
    history.push(`${location.pathname}?type=home&category=${category}`);
  };

  const searchByTag = (tag: string) => {
    history.push(`${location.pathname}?type=home&tag=${tag}`);
  };

  const handleArticlesFetch = (payload: any) => {
    if (criteria.text || criteria.tag || criteria.categoryId) {
      props.fetchArticlesPrimary({
        text: criteria.text,
        tag: criteria.tag,
        categoryId: criteria.categoryId,
        pageNo: payload.pageNo,
      });
      return;
    }
    props.fetchArticlesSecondary(payload);
  };

  return (
    <div className="reach-blog">
      {criteria.type === 'home' && (
        <ArticleHome
          articleSecondaryListData={props.articleSecondaryListData}
          articlePrimaryListData={props.articlePrimaryListData}
          articleFeaturedListData={props.articleFeaturedListData}
          handleFetchPrimaryArticles={props.fetchArticlesPrimary}
          handleFetchSecondaryArticles={props.fetchArticlesSecondary}
          layout={props.config.homeLayout}
          categories={props.categories}
          saveCategory={props.saveCategory}
          categoryMap={categoryMap}
          tags={props.tags}
          criteria={criteria}
          searchByText={searchByText}
          searchByCategory={searchByCategory}
          searchByTag={searchByTag}
          slots={slots}
        />
      )}
      {criteria.type === 'view' && article && <ViewArticle article={article} />}
      {criteria.type === 'edit' && article && (
        <EditArticle
          article={article}
          categories={props.categories}
          saveArticleSync={props.saveArticleSync}
        />
      )}
      {criteria.type === 'create' && (
        <CreateArticle
          categories={props.categories}
          saveArticleSync={props.saveArticleSync}
        />
      )}
    </div>
  );
};

export default ReachBlog;
