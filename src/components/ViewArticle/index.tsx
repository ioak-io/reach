import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './style.scss';
import ArticleItem from './ArticleItem';
import FeedbackView from './FeedbackView';
import ArticleMeta from '../ArticleHome/ArticleMeta';
import { Article } from '../../types/ArticleType';

interface Props {
  article: Article;
}

const queryString = require('query-string');

const ViewArticle = (props: Props) => {
  return (
    <>
      <div className="view-article one-sided-page">
        <div className="view-article__container one-sided-page__container">
          {/* {loading && <OakSpinner />} */}
          <>
            <ArticleItem article={props.article} />
            {props.article.tags && props.article.tags.length > 0 && (
              <div className="view-article__container__tags">
                <ArticleMeta article={props.article} show={['tags']} />
              </div>
            )}
            <FeedbackView article={props.article} />
          </>
          <div className="comment-section-wrapper">
            {/* <CommentSection articleId={urlParam.id} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewArticle;
