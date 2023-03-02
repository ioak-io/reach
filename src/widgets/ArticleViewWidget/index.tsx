import React, { useEffect, useState } from 'react';
import { Article } from '../../types/ArticleType';
import { Comment } from '../../types/CommentType';
import Comments from './Comments';
import './style.css';

export type ArticleViewWidgetProps = {
  article: Article;
  comments: Comment[];
  categoryMap: any;
  outline?: boolean;
}

const ArticleViewWidget = (props: ArticleViewWidgetProps) => {

  return (
    <div className={`reach-article-view-widget ${props.outline ? "reach-article-view-widget--outline" : ""}`}>
      <div className="reach-article-view-widget__main">
        <div
          className="reach-article-view-widget__main__timestamp small"
        >
          <div className="reach-article-view-widget__main__timestamp__created-on">Nov 29, 2022</div>
          <div className="reach-article-view-widget__main__timestamp__seperator" />
          <div className="reach-article-view-widget__main__timestamp__read-time">2 min</div>
        </div>
        <h1 className="reach-article-view-widget__main__title">
          {props.article?.title}
        </h1>
        <p
          className="reach-article-view-widget__main__description"
          dangerouslySetInnerHTML={{ __html: props.article.description }}
        />
      </div>
      <Comments comments={props.comments}/>
    </div>
  );
};

export default ArticleViewWidget;
