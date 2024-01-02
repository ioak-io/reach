import React from 'react';
import { Article } from '../../../types/ArticleType';
import './style.css';
// import TagContainer from '../ui/tag/TagContainer';

interface Props {
  article: Article;
  show: string[];
}

const ArticleMeta = (props: Props) => {
  return (
    <div className="reach-article-minimal-list-widget-article-meta">
      {props.show.includes('views') && props.article?.views > 0 && (
        <div className="reach-article-minimal-list-widget-article-meta__view">
          {`${props.article?.views} ${props.article?.views === 1 ? 'view' : 'views'
            }`}
        </div>
      )}
    </div>
  );
};

export default ArticleMeta;
