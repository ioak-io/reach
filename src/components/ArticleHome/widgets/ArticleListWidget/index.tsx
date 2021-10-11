import React, { useEffect, useState } from 'react';
import InfoSection from '../../InfoSection';
import './style.scss';
import { ReachWidget } from '../../../../types/ReachWidgetType';
import { ReachArticleDataPageType } from '../../../../types/ReachArticleDataPageType';
import ListArticle from '../../ListArticle';

interface Props {
  articleSecondaryListData?: Map<String, ReachArticleDataPageType>;
  articlePrimaryListData?: ReachArticleDataPageType;
  handleFetchPrimaryArticles: Function;
  handleFetchSecondaryArticles: Function;
  widget: ReachWidget;
  criteria: any;
  categoryMap: any;
}

const ArticleListWidget = (props: Props) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    handlePageChange(1);
  }, []);

  const handlePageChange = (pageNo: number) => {
    // let _pageData = props.articlePrimaryListData;
    // if (props.widget.type === 'article-secondary-list') {
    //   _pageData = props.articleSecondaryListData?.get(
    //     props.widget.identifier || ''
    //   );
    // }
    // if (!_pageData) {
    //   return;
    // }
    handleArticlesFetch({
      identifier: props.widget.identifier,
      pageNo,
    });
  };

  const handleArticlesFetch = (payload: any) => {
    if (props.widget.type === 'article-primary-list') {
      props.handleFetchPrimaryArticles({ ...props.criteria, ...payload });
    } else {
      props.handleFetchSecondaryArticles({ ...payload });
    }
  };

  useEffect(() => {
    if (
      props.criteria.articleId ||
      props.criteria.categoryId ||
      props.criteria.tag ||
      props.criteria.text
    ) {
      setShow(props.widget.type === 'article-primary-list');
    } else {
      setShow(
        ['article-primary-list', 'article-secondary-list'].includes(
          props.widget.type
        )
      );
    }
  }, [props.criteria]);

  return (
    <>
      {show && (
        <div className="articles-page-widget">
          {props.widget.type === 'article-primary-list' && (
            <>
              <InfoSection criteria={props.criteria} />
              <ListArticle
                articlesPageData={props.articlePrimaryListData}
                categoryMap={props.categoryMap}
                handlePageChange={handlePageChange}
                meta={props.widget.articleListMeta}
              />
            </>
          )}
          {props.widget.type === 'article-secondary-list' && (
            <ListArticle
              articlesPageData={props.articleSecondaryListData?.get(
                props.widget.identifier || ''
              )}
              categoryMap={props.categoryMap}
              handlePageChange={handlePageChange}
              meta={props.widget.articleListMeta}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ArticleListWidget;
