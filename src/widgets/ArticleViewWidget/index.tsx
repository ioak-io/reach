import React, { useEffect, useState } from 'react';
import { Article } from '../../types/ArticleType';
import './style.css';

interface Props {
  article: Article;
  categoryMap: any;
  outline?: boolean;
}

const ArticleViewWidget = (props: Props) => {
  const [imageUrl, setImageUrl] = useState<any>(null);

  useEffect(() => {
    setImageUrl("https://images.unsplash.com/photo-1519748771451-a94c596fad67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  }, [props.article]);

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
        <h3 className="reach-article-view-widget__main__title">
          {props.article?.title}
        </h3>
        <p
          className={`reach-article-view-widget__main__description five-liner`}
        >
          {props.article.description}
        </p>

        <div className="reach-article-view-widget__main__meta">
          <div className="reach-article-view-widget__main__meta__views small">
            {`${props.article?.views} ${props.article?.views === 1 ? 'comment' : 'comments'}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleViewWidget;
