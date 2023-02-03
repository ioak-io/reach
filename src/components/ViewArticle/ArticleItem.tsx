import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { compose as linkCompose } from '@oakui/core-stage/style-composer/OakLinkComposer';
import { compose as typographyCompose } from '@oakui/core-stage/style-composer/OakTypographyComposer';
import { BlockService } from 'elements';
import OakViewer from '../../oakui/OakViewer';

import './ArticleItem.scss';
import ArticleMeta from '../ArticleHome/ArticleMeta';
import OakClickArea from '../../oakui/wc/OakClickArea';
import { Article } from '../../types/ArticleType';
import OakButton from '../../oakui/wc/OakButton';

interface Props {
  article: Article;
}

const ArticleItem = (props: Props) => {
  const history = useHistory();
  const location = useLocation();
  const [confirmDelete, setConfirmDelete] = useState(false);

  const editArticle = () => {
    history.push(`${location.pathname}?type=edit&id=${props.article.id}`);
  };

  const goBack = () => {
    history.goBack();
  };

  const deleteArticlePrompt = () => {
    setConfirmDelete(true);
  };

  return (
    <>
      <div className="view-article-item">
        <OakViewer>{BlockService.toHtml(props.article.title)}</OakViewer>
        <div className="view-article-item__meta">
          <ArticleMeta article={props.article} show={['date', 'views']} />
          <a
            href={`/#${location.pathname}?type=edit&id=${props.article.id}`}
            className="view-article-item__meta__a"
          >
            <FontAwesomeIcon icon={faPencilAlt} />
            Edit
          </a>
        </div>
        <OakViewer>{BlockService.toHtml(props.article.description)}</OakViewer>
      </div>
    </>
  );
};

export default ArticleItem;
